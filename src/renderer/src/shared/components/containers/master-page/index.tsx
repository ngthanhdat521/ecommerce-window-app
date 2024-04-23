import { Main, Navbar, Sidebar } from '@shared/components/presentationals'
import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  pathname: string
  open: boolean
  handleOpenDropdown: () => void
  isSidebarDisplayed: boolean
  handleOpenSidebar: () => void
  signOut: () => void
}

export const MasterPage: FC<IProps> = (props) => {
  const {
    children,
    pathname,
    open = false,
    isSidebarDisplayed,
    handleOpenSidebar,
    handleOpenDropdown,
    signOut
  } = props

  const hidden = isSidebarDisplayed ? 'block' : 'md:hidden'

  return (
    <div className="grid grid-cols-12 fixed w-full">
      <>
        <div
          className={'xl:col-span-2 lg:col-span-3 lg:block lg:relative md:fixed md:z-20 ' + hidden}
        >
          <Sidebar />
        </div>

        <div
          onClick={handleOpenSidebar}
          className={
            'sm:fixed z-[19] w-full h-full bg-gray-50 opacity-50 md:block lg:hidden left-0 top-0 ' +
            hidden
          }
        />
      </>
      <div className="xl:col-span-10 lg:col-span-9 sm:col-span-12 h-screen overflow-y-auto">
        <Navbar
          open={open}
          handleOpenDropdown={handleOpenDropdown}
          handleOpenSidebar={handleOpenSidebar}
          signOut={signOut}
        />
        <Main pathname={pathname}>{children}</Main>
      </div>
    </div>
  )
}

export default MasterPage
