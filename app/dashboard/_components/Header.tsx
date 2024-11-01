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
          name=""
          id=""
          className="outline-none"
        />
      </div>
      <div className="flex items-center gap-5">
        <h2 className="bg-primary p-1 rounded-full text-[8px] md:text-xs text-white px-2"
        >
          🔥 Join Membership just for $9.99/month
        </h2>
        <UserButton />
      </div>
    </div>
  )
}

export default Header