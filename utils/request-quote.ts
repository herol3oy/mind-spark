import { Quote } from '@/types/quote'
import { QuoteTag } from '@/types/quote-tag'

const BASE_URL = 'https://api.quotable.io'

export const requestQuote = async (
  userSelectedTag: QuoteTag | null
): Promise<Quote> => {
  const tagQueryParam = userSelectedTag?.toLowerCase()
  const url = `${BASE_URL}/quotes/random?tags=${tagQueryParam}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Error occurred while fetching the quote.')
  }

  const data: Quote[] = await response.json()

  return data[0]
}
