"use client"

import { useState } from "react"
import SearchSection from "./_components/SearchSection"
import TemplateListSection from "./_components/TemplateListSection"

const Dashboard = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("")

  return (
    <div>
      {/* Searc Section */}
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      {/* Templates Lists Section */}
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard