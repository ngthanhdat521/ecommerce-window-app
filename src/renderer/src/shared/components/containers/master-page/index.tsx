import { Navbar, Sidebar, Main } from '../../presentationals'
import { FC, ReactNode } from 'react'

interface IProps {
  children: ReactNode
  pathname: string
  open: boolean
  handleOpenDropdown: () => void
}

export const MasterPage: FC<IProps> = (props) => {
  const { children, pathname, open = false, handleOpenDropdown } = props

  return (
    <div className="grid grid-cols-12 fixed w-full bg-white">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 h-screen overflow-y-auto">
        <Navbar open={open} handleOpenDropdown={handleOpenDropdown} />
        <Main pathname={pathname}>{children}</Main>
      </div>
    </div>
  )
}

export default MasterPage
