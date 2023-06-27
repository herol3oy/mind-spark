import Image from 'next/image'
import { Dispatch, SetStateAction, useContext } from 'react'

interface SideBarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }: SideBarProps) => {
  const handleToggleSidebar = () => setIsSidebarOpen((open) => !open)

  return (
    <aside
      className={`absolute right-0 top-0 bottom-0 z-50 overflow-y-auto py-10 px-5 w-72 secondary-bg-color shadow-xl transition-all duration-100 ${
        isSidebarOpen ? 'block' : 'hidden'
      }`}
    >
      <Image
        className="absolute left-2 top-2 hover-translate cursor-pointer"
        src="/icons/close.svg"
        width={25}
        height={25}
        alt="Close icon"
        onClick={handleToggleSidebar}
      />
      <h1 className="text-2xl font-bold text-center">Liked Quotes</h1>
      <hr className="my-5" />
    </aside>
  )
}

export default SideBar
