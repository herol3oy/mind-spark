import { Quote } from '@/types/quote'
import { PropsWithChildren, createContext, useState } from 'react'

const INITIAL_FAVORITE_QUOTES_CONTEXT = {
  favoriteQuotes: [],
  addFavoriteQuote: () => {},
  removeFavoriteQuote: () => {},
}

interface FavoriteQuotesContextProps {
  favoriteQuotes: Quote[]
  addFavoriteQuote: (quote: Quote) => void
  removeFavoriteQuote: (quoteId: string) => void
}

export const FavoriteQuotesContext = createContext<FavoriteQuotesContextProps>(
  INITIAL_FAVORITE_QUOTES_CONTEXT
)

export const FavoriteQuotesProvider = ({ children }: PropsWithChildren) => {
  const [favoriteQuotes, setFavoriteQuotes] = useState<Quote[]>([])

  const addFavoriteQuote = (quote: Quote) =>
    setFavoriteQuotes([...favoriteQuotes, quote])

  const removeFavoriteQuote = (quoteId: string) =>
    setFavoriteQuotes(favoriteQuotes.filter((quote) => quote._id !== quoteId))

  return (
    <FavoriteQuotesContext.Provider
      value={{ favoriteQuotes, addFavoriteQuote, removeFavoriteQuote }}
    >
      {children}
    </FavoriteQuotesContext.Provider>
  )
}
