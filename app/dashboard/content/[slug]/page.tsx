/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Templates from "@/app/(data)/Templates"
import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSection"
import { Template } from "../../_components/TemplateListSection"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { chatSession } from "@/utils/AIModal"
import { useState } from "react"
import { db } from "@/utils/db"
import { AIOutput } from "@/utils/schema"
import { useUser } from "@clerk/nextjs"
import moment from "moment"

interface Props {
  params: {
    slug: string
  }
}

type SelectedTemplate = Template | undefined

const CreateNewContentPage = (props: Props) => {
  const selectedTemplate: SelectedTemplate = Templates.find((template) => template.slug === props.params.slug)
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAIOutput] = useState<string>()
  const { user } = useUser()

  const generateAIContent = async (formData: any) => {

    setLoading(true)
    const selectedPrompt = selectedTemplate?.aiPrompt
    const finalAIPrompt = JSON.stringify(formData) + ", " + selectedPrompt
    const result = await chatSession.sendMessage(finalAIPrompt)
    setAIOutput(result?.response.text())
    await saveInDb(formData, selectedTemplate?.slug, result?.response.text())
    setLoading(false)
  }

  const saveInDb = async (formData: any, slug: any, aiOutput: string) => {
    const result = await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiOutput,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format('DD/MM/yyyy'),
    })
    console.log(result)
  }

  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft />
          Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormData={(v: any) => generateAIContent(v)}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput!} />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContentPage