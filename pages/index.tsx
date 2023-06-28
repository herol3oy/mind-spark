import MainContainer from '@/components/MainContainer'
import QuoteTagSelection from '@/components/QuoteTagSelection'
import DisplayMessage from '@/components/shared/DisplayMessage'
import { INITIAL_QUOTE } from '@/constants/initial-quote'
import { MESSAGE } from '@/constants/message'
import { Quote } from '@/types/quote'
import { QuoteTag } from '@/types/quote-tag'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const QuoteCard = dynamic(() => import('@/components/shared/QuoteCard'))

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

      <MainContainer>
        {!isLoading && quote?.content && <QuoteCard quote={quote} />}

        {!isLoading && !selectedTag && (
          <DisplayMessage message={MESSAGE.HOW_TO_START} />
        )}

        {isLoading && <DisplayMessage message={MESSAGE.LOADING} />}
      </MainContainer>
    </>
  )
}
