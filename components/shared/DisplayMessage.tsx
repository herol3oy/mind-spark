interface DisplayMessageProps {
  message: string
}

const DisplayMessage = ({ message }: DisplayMessageProps) => (
  <div className="flex flex-col items-center justify-center h-96">
    <p className="text-2xl italic secondary-text-color text-center font-bold">
      {message}
    </p>
  </div>
)

export default DisplayMessage
