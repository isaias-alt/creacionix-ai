import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Book, FileText, MessagesSquare, Settings, UserRound, Star, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="flex flex-col items-center justify-center">
        <header className="container flex h-20 bg-white min-w-full items-center justify-between px-4 md:px-20 border-b border-slate-200">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <div className="flex items-center gap-2">
            <Separator orientation="vertical" className="h-6 bg-slate-300" />
            <Button variant="link">
              <UserRound className="h-6 w-6" />
              <Link href="/dashboard">Get Started</Link>
            </Button>
          </div>
        </header>
        <div className="container space-y-24 px-4 py-8 md:py-12 lg:py-16">
          <div className="mx-auto flex max-w-[800px] flex-col items-center space-y-8 text-center">
            <Button variant="outline" asChild className="rounded-full flex items-center">
              <Link
                href="https://github.com/isaias-alt/creacionix-ai"
                target="_blank"
              >
                <Star className="h-6 w-6 text-yellow-400" />
                Star on GitHub
                <Github className="ml-4 h-4 w-4" />
              </Link>
            </Button>
            <h1 className="text-5xl font-bold sm:text-7xl md:text-8xl text-gray-800">
              Creacionix <span className="text-primary">AI</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in
              seconds.
            </p>
            <Button size="lg" asChild>
              <Link href="/dashboard">
                Get started
                <ArrowRight className="inline-block ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 sm:py-8 md:py-16 md:px-24 sm:px-12 px-6">
            <Card>
              <CardContent className="flex flex-col items-start space-y-2 p-6">
                <div className="rounded-lg bg-primary p-2 text-white">
                  <FileText className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">25+ templates</h3>
                <p className="text-lg text-muted-foreground">Responsive, and mobile-first project on the web</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-start space-y-2 p-6">
                <div className="rounded-lg bg-primary p-2 text-white">
                  <Settings className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Customizable</h3>
                <p className="text-lg text-muted-foreground">Components are easily customized and extendable</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-start space-y-2 p-6">
                <div className="rounded-lg bg-primary p-2 text-white">
                  <Book className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Free to Use</h3>
                <p className="text-lg text-muted-foreground">Every component and plugin is well documented</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-start space-y-2 p-6">
                <div className="rounded-lg bg-primary p-2 text-white">
                  <MessagesSquare className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">24/7 Support</h3>
                <p className="text-lg text-muted-foreground">Contact us 24 hours a day, 7 days a week</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div >
    </div>

  )
}