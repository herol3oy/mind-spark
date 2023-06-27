import QuoteTagSelection from '@/components/QuoteTagSelection'
import QuoteCard from '@/components/shared/QuoteCard'
import { INITIAL_QUOTE } from '@/constants/initial-quote'
import { Quote } from '@/types/quote'
import { QuoteTag } from '@/types/quote-tag'
import { useState } from 'react'

export default function Home() {
  const [quote, setQuote] = useState<Quote>(INITIAL_QUOTE)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [selectedTag, setSelectedTag] = useState<QuoteTag | null>(null)

  return (
    <>
      <QuoteTagSelection
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        setQuote={setQuote}
        setIsLoading={setIsLoading}
      />

      {!isLoading && quote?.content && <QuoteCard quote={quote} />}
    </>
  )
}
