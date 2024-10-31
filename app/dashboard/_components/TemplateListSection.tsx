"use client"

import Templates from "@/app/(data)/Templates"
import TemplateCard from "./TemplateCard"
import { useEffect, useState } from "react"

export interface Template {
  name: string
  description: string
  category: string
  icon: string
  aiPrompt: string
  slug: string
  form?: Form[]
}

export interface Form {
  label: string
  field: string
  name: string
  required?: boolean
}

const TemplateListSection = ({ userSearchInput }: any) => {
  const [templateList, setTemplateList] = useState(Templates)

  useEffect(() => {
    if (userSearchInput) {
      const filteredTemplates = Templates.filter((template) =>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      )
      setTemplateList(filteredTemplates)
    } else {
      setTemplateList(Templates)
    }

  }, [userSearchInput])

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10">
      {templateList.map((template: Template, index: number) => (
        <TemplateCard key={index} {...template} />
      ))}
    </div>
  )
}

export default TemplateListSection