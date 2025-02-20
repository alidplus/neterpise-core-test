import { SidebarMenu } from '../types/sidebar'
import { UserData } from '../types/user'

const sidebarData: SidebarMenu = {
  links: [
    { label: 'Dashboard', icon: 'Dashboard', uri: '/' },
    { label: 'Design The Core', icon: 'Diagram', uri: '/design' },
  ],
  groups: [
    {
      label: 'Profile Overview',
      links: [
        { label: 'Messages', icon: 'Message', uri: '/messages' },
        { label: 'Security', icon: 'Security', uri: '/security' },
        { label: 'Settings', icon: 'Settings', uri: '/settings' },
        { label: 'Module A', icon: 'Goals', uri: '/module-a' },
        { label: 'Registered Users', icon: 'Goals', uri: '/registered-users' },
        { label: 'Registration', icon: 'Goals', uri: '/register' },
        { label: 'Module X', icon: 'Goals', uri: '/module-x' },
      ],
    },
  ],
}

export async function getSidebarData(): Promise<SidebarMenu> {
  return sidebarData
}

const userDate: UserData = {
  fullName: 'Alexis Enache',
  email: 'alexis81@gmail.com',
  avatar: 'https://i.ibb.co/L1LQtBm/Ellipse-1.png',
}

export async function getUserDate(): Promise<UserData> {
  return userDate
}
