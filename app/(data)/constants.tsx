import { FileClock, Home, Settings } from 'lucide-react'

export const menuItems = [
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
    name: 'Settings',
    path: '/dashboard/settings',
    icon: Settings
  },
]