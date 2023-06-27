import DisplayMessage from '@/components/shared/DisplayMessage'
import FavoriteQuoteCard from '@/components/shared/FavoriteQuoteCard'
import { MESSAGE } from '@/constants/message'
import { FavoriteQuotesContext } from '@/context/FavoriteQuotesContext'
import Image from 'next/image'
import { Dispatch, SetStateAction, useContext } from 'react'

interface SideBarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const SideBar = ({ isSidebarOpen, setIsSidebarOpen }: SideBarProps) => {
  const { favoriteQuotes } = useContext(FavoriteQuotesContext)

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
      <div className="flex flex-col gap-2">
        {!favoriteQuotes.length ? (
          <DisplayMessage message={MESSAGE.NO_LIKED_QUOTE_FOUND} />
        ) : (
          favoriteQuotes
            .map((quote) => <FavoriteQuoteCard key={quote._id} quote={quote} />)
            .reverse()
        )}
      </div>
    </aside>
  )
}

export default SideBar
