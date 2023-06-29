import { Quote } from '@/types/quote'
import { QuoteTag } from '@/types/quote-tag'
import { requestQuote } from '@/utils/request-quote'
import { Dispatch, SetStateAction } from 'react'

interface QuoteTagSelectionProps {
  setQuote: Dispatch<SetStateAction<Quote>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
  selectedTag: QuoteTag | null
  setSelectedTag: Dispatch<SetStateAction<QuoteTag | null>>
}

const QuoteTagSelection = ({
  setQuote,
  setIsLoading,
  isLoading,
  selectedTag,
  setSelectedTag,
}: QuoteTagSelectionProps) => {
  const handleTagChange = (tag: QuoteTag) => setSelectedTag(tag)

  const handleGenerateQuote = async () => {
    setIsLoading(true)
    const data: Quote = await requestQuote(selectedTag)
    setQuote(data)
    setIsLoading(false)
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-2 -mt-20">
        <div className="flex flex-col-reverse gap-4 relative items-center">
          <div className="grid grid-cols-3 md:flex gap-2">
            {Object.values(QuoteTag).map((tag) => (
              <label
                key={tag}
                className={`flex justify-center items-center border-0 rounded-xl py-3 w-20 md:w-32 cursor-pointer text-sm md:text-xl capitalize hover-translate shadow-lg duration-300 hover:primary-bg-color hover:shadow-none ${
                  selectedTag === tag
                    ? 'primary-bg-color shadow-none'
                    : 'secondary-bg-color'
                }`}
              >
                <input
                  className="mr-2 cursor-pointer"
                  type="radio"
                  name="category"
                  value={tag}
                  onChange={() => handleTagChange(tag)}
                />
                {tag}
              </label>
            ))}
          </div>
          <button
            className={`primary-text-color text-sm font-black rounded-md px-2 h-9 w-36 secondary-text-color disabled:cursor-not-allowed disabled:hover:-translate-y-0 hover-translate ${
              selectedTag ? 'bg-black primary-text-color' : 'primary-bg-color'
            }`}
            disabled={!selectedTag || isLoading}
            onClick={handleGenerateQuote}
          >
            {selectedTag
              ? isLoading
                ? 'Getting...'
                : 'Get a quote'
              : 'Select a category'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuoteTagSelection
