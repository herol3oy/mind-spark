import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import TopBar from '../components/TopBar'

const setIsSidebarOpen = vi.fn()

vi.mock('next/font/google', () => ({
  Anton: () => ({
    weight: '400',
    subsets: ['latin'],
    className: 'mocked-anton',
  }),
}))

beforeEach(async () => {
  render(await TopBar({ setIsSidebarOpen }))
})

test("renders the 'Mindspark' logo with required styles", async () => {
  const logo = screen.getByText('Mindspark')
  expect(logo).toBeInTheDocument()
  expect(logo).toHaveClass('text-4xl md:text-7xl uppercase')
})

test('renders the heart icon with required styles', async () => {
  const heartIcon = screen.getByAltText('Heart icon')
  expect(heartIcon).toBeInTheDocument()
  expect(heartIcon).toHaveClass('cursor-pointer animate-pulse hover-translate')
})

test('fires setIsSidebarOpen when user clicks on heart icon', async () => {
  const heartIcon = screen.getByAltText('Heart icon')
  expect(setIsSidebarOpen).not.toHaveBeenCalled()

  heartIcon.click()
  expect(setIsSidebarOpen).toHaveBeenCalledTimes(1)

  heartIcon.click()
  expect(setIsSidebarOpen).toHaveBeenCalledTimes(2)
})
