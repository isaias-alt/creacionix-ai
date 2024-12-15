"use client"

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { menuItems } from '@/app/(data)/constants'

const SideNav = () => {

  const pathname = usePathname()

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image src="/logo.svg" alt="Logo" width={120} height={100} />
      </div>
      <hr className='my-4 border' />
      <div className='mt-3'>
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path}>
            <div
              className={`flex items-center gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer 
              ${pathname === item.path ? 'bg-primary text-white' : ''}`}
            >
              <item.icon className='w-6 h-8' />
              <h2 className='text-lg'>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SideNav