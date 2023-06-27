import { expect, test } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import Footer from '../components/Footer'

const APP_TITLE = 'Mindspark'

test('should render the app title in the footer', async () => {
  render(await Footer())

  const footer = within(screen.getByRole('contentinfo'))
  expect(
    footer.getByRole('heading', { level: 6, name: APP_TITLE })
  ).toBeDefined()
})
