import { QuoteTag } from '@/types/quote-tag'

export interface Quote {
  _id: string
  content: string
  author: string
  tags: QuoteTag[]
  authorSlug: string
}
