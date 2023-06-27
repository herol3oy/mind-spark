import { vi } from 'vitest'
import { QuoteTag } from '../types/quote-tag'
import { requestQuote } from '../utils/request-quote'

const MOCK_RESPONSE = {
  _id: 'KMTJ0Ya3e9',
  content: 'To invent, you need a good imagination and a pile of junk.',
  author: 'Thomas Edison',
  tags: [QuoteTag.CREATIVITY, QuoteTag.IMAGINATION, QuoteTag.WISDOM],
  authorSlug: 'thomas-edison',
  dateAdded: '2023-04-14',
  dateModified: '2023-04-14',
  length: 58,
}

const EXPECTED_QUOUTE = {
  _id: 'KMTJ0Ya3e9',
  content: 'To invent, you need a good imagination and a pile of junk.',
  author: 'Thomas Edison',
  tags: [
    QuoteTag.IMAGINATION,
    QuoteTag.CREATIVITY,
    QuoteTag.SCIENCE,
    QuoteTag.TECHNOLOGY,
  ],
  authorSlug: 'thomas-edison',
  dateAdded: '2023-04-14',
  dateModified: '2023-04-14',
  length: 58,
}

test('should return a quote when request is successful', async () => {
  vi.mock('fetch', () => ({
    ok: true,
    json: async () => MOCK_RESPONSE,
  }))

  const selectedTag = [QuoteTag.CREATIVITY]
  const quote = await requestQuote(selectedTag.length ? selectedTag[0] : null);

  expect(quote).toEqual(EXPECTED_QUOUTE)
})
