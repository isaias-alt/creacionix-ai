/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-async-client-component */
"use client"

import { TotalUsageContext } from "@/app/(context)/TotalUsageContext"
import { Button } from "@/components/ui/button"
import { db } from "@/utils/db"
import { AIOutput } from "@/utils/schema"
import { useUser } from "@clerk/nextjs"
import { eq } from "drizzle-orm"
import { useContext, useEffect } from "react"

export interface RESULT {
  id: number,
  formData: string,
  aiResponse: string,
  templateSlug: string,
  createdBy: string,
  createdAt: string
}

function UsageTrack() {
  const { user } = useUser()
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)


  useEffect(() => {
    user && getData()
  }, [user])

  const getData = async () => {
    const result: RESULT[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress))
    getTotalUsage(result)
  }

  const getTotalUsage = (result: RESULT[]) => {
    let totalUsage: number = 0
    result.forEach((item: any) => {
      totalUsage += Number(item.aiResponse.length)
    })
    setTotalUsage(totalUsage)
    console.log(totalUsage)
  }

  return (
    <div className="m-5">
      <div className="bg-primary text-white rounded-lg p-3">
        <h2 className="font-medium">Credits</h2>
        <div className="h-2 bg-[#9981F9] rounded-full mt-3">
          <div className="h-2 bg-white rounded-full" style={{ width: (totalUsage! / 10000) * 100 + '%' }}></div>
        </div>
        <h2 className="text-sm my-2">{totalUsage}/10.000 Credits Used</h2>
      </div>
      <Button className="w-full my-3">Upgrade</Button>
    </div>
  )
}

export default UsageTrack