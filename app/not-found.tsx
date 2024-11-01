import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const NotFount = () => {
  return (
    <main className="flex flex-col items-center justify-center max-w-4xl mx-auto p-8">
      <h1 className="font-bold text-4xl py-8">
        404 but...
      </h1>
      <Image width={500} height={300} src="/this-is-fine-404.gif" alt="this is fine dog" priority />
      <h1 className="opacity-50 text-primary text-2xl py-8">
        Under construction
      </h1>
      <Link
        href="/dashboard"
        className="group flex items-center space-x-2 font-medium hover:text-primary"
      >
        <ArrowLeft className="h-4 w-4" />

        <span
          className="opacity-70 decoration-neutral-200 decoration-dotted underline-offset-[5px] hover:underline"
        >
          Go back
        </span>
      </Link>
    </main>
  )
}

export default NotFount