import { render, screen } from '@testing-library/react'
import BookingPage from './Components/BookingPage.js'
import BookingForm from './Components/BookingForm.js'

test('Booking Page title test', () => {
  const mockDispatch = jest.fn()
  const availableTimes = ['12:00', '13:00', '14:00', '15:00', '16:00']

 render(<BookingPage dispatch={mockDispatch} availableTimes={availableTimes}/>)
 const headingElement = screen.getByText('Book a table!')
 expect(headingElement).toBeInTheDocument()
})

test('Testing updateTimes reducer function', () => {
  const mockDispatch = jest.fn()
  const mockHandleChange = jest.fn()
  const mockAvailableTimes = ['12:00', '13:00', '14:00', '15:00', '16:00']
  const mockFormData = {ocassion: 'Birthday'}

  render(<BookingForm
    dispatch={mockDispatch}
    availableTimes={mockAvailableTimes}
    formData={mockFormData}
    handleChange={mockHandleChange}
    />)

    const selectElement = screen.getAllByTestId('ocassion-select')
    expect(selectElement).toBeInTheDocument()

})