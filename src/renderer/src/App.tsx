import { MasterPage } from '../src/shared/components/containers'
import { FC, useEffect, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useSession } from './hooks/useSession'
import './index.css'

export const App: FC = () => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [isSidebarDisplayed, setIsSidebarDisplayed] = useState(true)
  const navigate = useNavigate();

  const handleOpenDropdown = () => setOpen(!open)

  const signOut = () => {
    navigate('/sign-in');
  }

  // useSession()

  useEffect(() => {
    if (window.innerWidth <= 768) setIsSidebarDisplayed(false)
  }, [])

  return (
    <MasterPage
      pathname={pathname.substring(1, pathname.length)}
      open={open}
      isSidebarDisplayed={isSidebarDisplayed}
      handleOpenSidebar={() => setIsSidebarDisplayed(!isSidebarDisplayed)}
      handleOpenDropdown={handleOpenDropdown}
      signOut={signOut}
    >
      <Outlet />
    </MasterPage>
  )
}
