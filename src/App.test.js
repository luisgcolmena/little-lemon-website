import { render, screen } from '@testing-library/react'
import BookingPage from './Components/BookingPage.js'

test('Booking Page title test', () => {
  const mockDispatch = jest.fn()
  const availableTimes = ['12:00', '13:00', '14:00', '15:00', '16:00']

 render(<BookingPage dispatch={mockDispatch} availableTimes={availableTimes}/>)
 const headingElement = screen.getByText('Book a table!')
 expect(headingElement).toBeInTheDocument()
})