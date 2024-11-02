import { UserButton } from "@clerk/nextjs"
import { Search } from "lucide-react"

const Header = () => {
  return (
    <div className=" flex justify-between items-center p-5 shadow-sm border-b-2 bg-white">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-lg">
        <Search />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none"
        />
      </div>
      <div className="flex items-center gap-5">
        <UserButton />
      </div>
    </div>
  )
}

export default Header