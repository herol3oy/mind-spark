import { render, screen } from '@testing-library/react'
import DisplayMessage from '../components/shared/DisplayMessage'

test('DisplayMessage component renders a message', async () => {
  const message = 'Test message'

  render(await DisplayMessage({ message }))

  const messageElement = screen.getByText(message)

  expect(messageElement).toBeInTheDocument()
})
