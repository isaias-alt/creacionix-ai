import Image from "next/image"
import { Template } from "./template-list-section"
import Link from "next/link"

const TemplateCard = (item: Template) => {
  return (
    <Link href={`/dashboard/content/${item.slug}`}>
      <div className="p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all">
        <Image src={item.icon} alt={item.name} width={50} height={50} />
        <h2 className="font-medium text-lg">{item.name}</h2>
        <p className="text-gray-500 line-clamp-2">{item.description}</p>
      </div>
    </Link>
  )
}

export default TemplateCard