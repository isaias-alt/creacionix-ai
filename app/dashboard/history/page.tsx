'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy } from "lucide-react"
import { db } from "@/utils/db"
import { AIOutput } from "@/utils/schema"
import { eq } from "drizzle-orm"
import { useUser } from "@clerk/nextjs"
import { useToast } from '@/hooks/use-toast'
import Templates from '@/app/(data)/Templates'
import Image from 'next/image'

interface HistoryItem {
  id: number
  formData: string
  aiResponse: string | null
  templateSlug: string
  createdBy: string
  createdAt: string | null
}

export default function Component() {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const { user } = useUser()
  const { toast } = useToast()

  useEffect(() => {
    const fetchHistory = async () => {
      if (user?.primaryEmailAddress?.emailAddress) {
        const results = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
          .orderBy(AIOutput.createdAt)
        setHistory(results)
      }
    }

    fetchHistory()
  }, [user])

  const getTemplateName = (slug: string) => {
    const template = Templates.find((template) => template.slug === slug)
    return template?.name
  }

  const getTemplateIcon = (slug: string) => {
    const template = Templates.find((template) => template.slug === slug)
    return template?.icon
  }

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "The content has been copied to your clipboard.",
    })
  }

  const getWordCount = (text: string) => {
    return text.split(/\s+/).filter(Boolean).length
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">History</CardTitle>
        <p className="text-muted-foreground">Search your previously generated AI content</p>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border">
          <div className="flex items-center p-4 bg-muted font-medium text-sm">
            <div className="flex-1">TEMPLATE</div>
            <div className="flex-[2]">AI RESP</div>
            <div className="flex-1 text-center">DATE</div>
            <div className="flex-1 text-center">WORDS</div>
            <div className="flex-1 text-center">COPY</div>
          </div>
          <div className="divide-y">
            {history.map((item) => (
              <div key={item.id} className="flex items-center p-4">
                <div className="flex-1 flex items-center gap-2">
                  <Image src={`${getTemplateIcon(item.templateSlug)}`} alt={`${getTemplateName(item.templateSlug)}`} width={32} height={32} />
                  <p className="text-lg">{getTemplateName(item.templateSlug)}</p>
                </div>
                <div className="flex-[2] text-sm line-clamp-3 px-4">
                  {item.aiResponse}
                </div>
                <div className="flex-1 text-sm text-center whitespace-nowrap">
                  {item.createdAt}
                </div>
                <div className="flex-1 text-sm text-center">
                  {item.aiResponse ? getWordCount(item.aiResponse) : 0}
                </div>
                <div className="flex-1 text-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary"
                    onClick={() => item.aiResponse && copyToClipboard(item.aiResponse)}
                  >
                    <Copy className="h-4 w-4" />
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
