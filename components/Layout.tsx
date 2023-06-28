import Footer from '@/components/Footer'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'
import { PropsWithChildren, useState } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)

  return (
    <>
      <TopBar setIsSidebarOpen={setIsSidebarOpen} />
      <SideBar
        setIsSidebarOpen={setIsSidebarOpen}
        isSidebarOpen={isSidebarOpen}
      />
      <main className="primary-bg-color">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
