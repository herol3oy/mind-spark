import { Quote } from '@/types/quote'
import Image from 'next/image'

interface QuoteCardProps {
  quote: Quote
}

const QuoteCard = ({ quote }: QuoteCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 gap-2 md:gap-10 mt-2 md:mt-12 h-96">
      <div className="grid grid-cols-2 md:flex justify-center gap-5">
        {quote.tags.map((tag) => (
          <small key={tag} className="badge">
            {tag}
          </small>
        ))}
      </div>
      <p className="flex items-center secondary-text-color text-sm md:text-2xl font-semibold text-center h-44">
        {quote.content}
      </p>
      <div className="flex items-center gap-2">
        <Image
          className="cursor-pointer hover-translate"
          src="/icons/heart-outline.svg"
          width={40}
          height={40}
          alt="Heart icon"
        />
        <p className="secondary-text-color text-md md:text-xl">
          {quote.author}
        </p>
      </div>
    </div>
  )
}

export default QuoteCard
