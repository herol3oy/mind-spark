import { Anton } from 'next/font/google'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
})

interface TopBarProps {
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const TopBar = ({ setIsSidebarOpen }: TopBarProps) => {
  const handleSidebarToggle = () => setIsSidebarOpen((open) => !open)

  return (
    <nav className="flex items-start justify-between p-10 h-52 md:h-96 bg-white">
      <h1 className={`text-4xl md:text-7xl uppercase ${anton.className}`}>Mindspark</h1>

      <Image
        className="cursor-pointer animate-pulse hover-translate"
        src="/icons/heart.svg"
        width={50}
        height={50}
        alt="Heart icon"
        onClick={handleSidebarToggle}
      />
    </nav>
  )
}

export default TopBar
