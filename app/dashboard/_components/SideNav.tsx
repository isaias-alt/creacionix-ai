"use client"

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import { useEffect } from 'react'
import UsageTrack from './UsageTrack'

const SideNav = () => {
  const menuItems = [
    {
      name: 'Home',
      path: '/dashboard',
      icon: Home
    },
    {
      name: 'History',
      path: '/dashboard/history',
      icon: FileClock
    },
    {
      name: 'Billing',
      path: '/dashboard/billing',
      icon: WalletCards
    },
    {
      name: 'Settings',
      path: '/dashboard/settings',
      icon: Settings
    },
  ]

  const pathname = usePathname()

  useEffect(() => {
    console.log(pathname)
  }, [pathname])

  return (
    <div className='h-screen p-5 shadow-sm border bg-white'>
      <div className='flex justify-center'>
        <Image src="/logo.svg" alt="Logo" width={120} height={100} />
      </div>
      <hr className='my-4 border' />
      <div className='mt-3'>
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer 
              ${pathname === item.path ? 'bg-primary text-white' : ''}`}
          >
            <item.icon className='w-6 h-8' />
            <h2 className='text-lg'>{item.name}</h2>
          </div>
        ))}
      </div>
      <div className='absolute bottom-10 left-0 w-full'>
        <UsageTrack />
      </div>
    </div>
  )
}

export default SideNav