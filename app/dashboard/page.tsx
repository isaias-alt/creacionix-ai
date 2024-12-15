"use client"

import { useState } from "react"
import SearchSection from "./__components/search-section"
import TemplateListSection from "./__components/template-list-section"

const DashboardPage = () => {
  const [userSearchInput, setUserSearchInput] = useState<string>("")

  return (
    <div>
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default DashboardPage