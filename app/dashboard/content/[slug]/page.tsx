"use client"

import Templates from "@/app/(data)/Templates"
import FormSection from "../_components/FormSection"
import OutputSection from "../_components/OutputSection"
import { Template } from "../../_components/TemplateListSection"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface Props {
  params: {
    slug: string
  }
}

type SelectedTemplate = Template | undefined

const CreateNewContentPage = (props: Props) => {
  const selectedTemplate: SelectedTemplate = Templates.find((template) => template.slug === props.params.slug)

  const generateAIContent = async (formData: any) => {
    console.log(formData)
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
        />
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  )
}

export default CreateNewContentPage