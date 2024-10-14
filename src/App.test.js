import { render, screen } from '@testing-library/react'
import BookingPage, { updateTimes, initializeTimes } from './Views/BookingPage.js'

import { MemoryRouter } from 'react-router-dom'

test('Booking Page title test', () => {

  render(
  <MemoryRouter>
    <BookingPage />
  </MemoryRouter>)
  const headingElement = screen.getByText('Book a table!')
  expect(headingElement).toBeInTheDocument()
})

test('initializeTimes alternative test', () => {

  expect(initializeTimes.length).toBeGreaterThan(0)

})

test('updateTimes useReducer test', () => {

  let availableHours = updateTimes(initializeTimes, '2024-10-25')
  expect(availableHours).toStrictEqual(['17:00','17:30','18:00','19:00','19:30','20:30','22:30'])

})