"use client"

import { useState } from "react"
import { TotalUsageContext } from "../(context)/TotalUsageContext"
import Header from "./_components/Header"
import SideNav from "./_components/SideNav"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [totalUsage, setTotalUsage] = useState<number>(0)

  return (
    <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
      <div className="bg-slate-100 h-screen">
        <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
      </div>
    </TotalUsageContext.Provider>
  )
}

export default DashboardLayout