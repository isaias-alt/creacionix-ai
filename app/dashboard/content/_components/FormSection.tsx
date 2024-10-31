"use client"

import { useState } from 'react'
import { Template } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

interface Props {
  selectedTemplate?: Template
  userFormData: any
}

const FormSection = ({ selectedTemplate, userFormData }: Props) => {
  const [formData, setFormData] = useState<any>()

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    userFormData(formData)
  }

  if (!selectedTemplate) return null

  return (
    <div className="p-5 shadow-md rounded-lg border bg-white">
      <Image src={selectedTemplate?.icon} alt="Template Icon" width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplate?.name}</h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.description}</p>

      <form className='mt-6' onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className='font-bold'>{item.label}</label>
            {item.field === 'input' ?
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleOnChange}
              />
              : item.field === 'textarea'
                ? <Textarea
                  name={item.name}
                  required={item?.required}
                  onChange={handleOnChange}
                />
                : null
            }
          </div>
        ))}

        <Button type='submit' className='w-full py-6'>Generate Content</Button>
      </form>
    </div>
  )
}

export default FormSection