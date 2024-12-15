"use client"

import { UserButton } from "@clerk/nextjs"
import { ResponsiveNav } from "./responsive-nav"

const Header = () => {
  return (
    <div className=" flex justify-between items-center p-5 bg-white">
      <div className="flex gap-2 items-center pb-1 max-w-lg md:hidden">
        <ResponsiveNav />
      </div>
      <div className="flex gap-2 items-center pb-1 max-w-lg">
        <h2 className="md:text-4xl text-2xl font-bold text-primary">Creacionix AI</h2>
      </div>
      <div className="flex items-center gap-5">
        <UserButton />
      </div>
    </div>
  )
}

export default Header