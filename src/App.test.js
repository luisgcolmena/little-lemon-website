import { render, screen, within } from '@testing-library/react'
import BookingPage, { updateTimes, initializeTimes } from './Views/BookingPage.js'
import BookingForm from './Components/BookingForm.js'

test('Booking Page title test', () => {
/*   const mockDispatch = jest.fn()
  const mockHandleChange = jest.fn()
  const availableTimes = ['12:00', '13:00', '14:00', '15:00', '16:00']
  const mockFormData = {
    name: '',
    date: '',
    phoneNumber: '+56 ',
    guests: 1,
    ocassion:'Birthday',
    notes: 'Additional Notes (Opcional)'
  } */

  render(<BookingPage
/*     dispatch={mockDispatch}
    availableTimes={availableTimes}
    formData={mockFormData}
    handleChange={mockHandleChange} */
    />)
 const headingElement = screen.getByText('Book a table!')
 expect(headingElement).toBeInTheDocument()
})

test('Testing initializeTimes reducer initial state', () => {
  const mockDispatch = jest.fn()
  const mockHandleChange = jest.fn()
  const mockAvailableTimes = ['12:00', '13:00', '14:00', '15:00', '16:00']
  const mockFormData = {
    name: '',
    date: '',
    phoneNumber: '+56 ',
    guests: 1,
    ocassion:'Birthday',
    notes: 'Additional Notes (Opcional)'
  }

  render(<BookingForm
    dispatch={mockDispatch}
    availableTimes={mockAvailableTimes}
    formData={mockFormData}
    handleChange={mockHandleChange}
    />)

    const selectElement = screen.getByTestId('time-select')
    const selectOptions = within(selectElement).getAllByRole('option')
    expect(selectOptions).toHaveLength(5)
    expect(selectOptions[0]).toHaveTextContent('12:00')
    expect(selectOptions[1]).toHaveTextContent('13:00')
    expect(selectOptions[2]).toHaveTextContent('14:00')
    expect(selectOptions[3]).toHaveTextContent('15:00')
    expect(selectOptions[4]).toHaveTextContent('16:00')
})

test('updateTimes useReducer test', () => {

  let availableHours = updateTimes(initializeTimes, '2024-11-25')
  expect(availableHours).toStrictEqual(['12:00', '13:00', '14:00', '15:00', '16:00'])

})