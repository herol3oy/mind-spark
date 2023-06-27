import QuoteTagSelection from '@/components/QuoteTagSelection'
import DisplayMessage from '@/components/shared/DisplayMessage'
import QuoteCard from '@/components/shared/QuoteCard'
import { INITIAL_QUOTE } from '@/constants/initial-quote'
import { MESSAGE } from '@/constants/message'
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

      {!isLoading && !selectedTag && (
        <DisplayMessage message={MESSAGE.HOW_TO_START} />
      )}

      {isLoading && <DisplayMessage message={MESSAGE.LOADING} />}
    </>
  )
}
