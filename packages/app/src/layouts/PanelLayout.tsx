import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
} from '@nextui-org/react'
import { Fragment, Suspense, useEffect } from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
import BrandLoading from '../components/Loading'
import { UserCard } from '../components/UserCard'
import { Sidebar } from '../components/Sidebar'
import { LayoutRouterData } from '../types/loader'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  bindMenu,
  selectSidebarGroups,
  selectSidebarLinks,
} from '../store/slices/sidebar'

function useLayoutData(): LayoutRouterData {
  const data = useLoaderData()
  return data as LayoutRouterData
}

export default function PanelLayout() {
  const { sidebarData, userData } = useLayoutData()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(bindMenu({ key: '@@APP', menu: sidebarData }))
  }, [sidebarData])

  return (
    <Fragment>
      <Navbar
        maxWidth="full"
        isBordered
        isBlurred={false}
        className="bg-gray-900 shadow-lg"
      >
        <NavbarContent>
          <NavbarBrand>
            <img src="/logo.png" alt="" width={180} />
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={userData.fullName}
                size="sm"
                src={userData.avatar}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="">Signed in as</p>
                <p className="font-semibold">{userData.email}</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </Navbar>
      <div className="flex h-[calc(100dvh_-_4rem_-_1px)]">
        <Sidebar visible>
          <UserCard user={userData} />
        </Sidebar>
        <div className="relative w-full overflow-y-auto p-5">
          <Suspense fallback={<BrandLoading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </Fragment>
  )
}
