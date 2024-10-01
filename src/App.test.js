import { render, screen, within } from '@testing-library/react'
import { BookingPage } from './Views/BookingPage.js'
import BookingForm from './Components/BookingForm.js'

test('Booking Page title test', () => {
  const mockDispatch = jest.fn()
  const availableTimes = ['12:00', '13:00', '14:00', '15:00', '16:00']

 render(<BookingPage dispatch={mockDispatch} availableTimes={availableTimes}/>)
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

/*     const selectOccasionElement = screen.getByTestId('ocassion-select').getAllByRole('option')
    expect(selectOccasionElement).toHaveLength(5)
    expect(selectOccasionElement[0]).toHaveTextContent('12:00')


    const selectOcassion = screen.getByTestId('ocassion-select')
    const selectOcassionArray = selectOcassion.getAllByRole('option')
    expect(selectOcassionArray).toHaveLength(5)
    expect(selectOcassionArray[0]).toHaveTextContent('12:00')
    expect(selectOcassionArray[1]).toHaveTextContent('13:00')
    expect(selectOcassionArray[2]).toHaveTextContent('14:00')
    expect(selectOcassionArray[3]).toHaveTextContent('15:00')
    expect(selectOcassionArray[4]).toHaveTextContent('16:00') */

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

  render ( <BookingPage />)


})