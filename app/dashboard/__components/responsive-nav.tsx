import { menuItems } from "@/app/(data)/constants"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Link from "next/link"

export const ResponsiveNav = () => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Menu className="size-8 text-primary" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="size-44 flex flex-col gap-2 items-center justify-center">
        {menuItems.map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link href={item.path}>
              <item.icon className="size-6" />
              <span>{item.name}</span>
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>

  )
}