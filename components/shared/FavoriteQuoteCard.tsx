import { FavoriteQuotesContext } from '@/context/FavoriteQuotesContext'
import { Quote } from '@/types/quote'
import Image from 'next/image'
import { useContext } from 'react'

interface FavoriteQuoteCardProps {
  quote: Quote
}

const FavoriteQuoteCard = ({ quote }: FavoriteQuoteCardProps) => {
  const { removeFavoriteQuote } = useContext(FavoriteQuotesContext)

  const handleRemoveFavoriteQuote = () => removeFavoriteQuote(quote._id)

  return (
    <div className="flex flex-col gap-5 primary-bg-color p-5 rounded-xl">
      <h1 className="secondary-text-color">{quote.content}</h1>
      <div className="flex justify-between">
        <small>~ {quote.author}</small>
        <Image
          className="cursor-pointer hover-translate"
          src="/icons/bin.svg"
          width={20}
          height={20}
          alt="bin icon"
          onClick={handleRemoveFavoriteQuote}
        />
      </div>
    </div>
  )
}

export default FavoriteQuoteCard
