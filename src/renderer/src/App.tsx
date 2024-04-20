import { MasterPage } from './shared/components/containers'
import { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useSession } from './hooks/useSession'
import './index.css'
import { ProductPage } from './pages/products'

export const App: FC = () => {
  // const { pathname } = useLocation()
  const pathname = ''
  const [open, setOpen] = useState(false)

  const handleOpenDropdown = () => setOpen(!open)

  // useSession()

  return (
    <MasterPage
      pathname={pathname.substring(1, pathname.length)}
      open={open}
      handleOpenDropdown={handleOpenDropdown}
    >
      <Outlet />
    </MasterPage>
  )
}
