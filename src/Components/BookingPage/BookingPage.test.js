import BookingPage from "./BookingPage"
import {render, fireEvent, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import { userEvent } from '@testing-library/user-event'

const getInputByLabel = (inputLabel) => {
  const inputElement = screen.getByLabelText(inputLabel)
  return inputElement
}

describe('booking page form testing', () => {
  
  function MemoBookingPage () {
    return (
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    )
  }
  

  test('renders form with initial values', () => {

    render(<MemoBookingPage />)

    const dateInput = getInputByLabel('Date')
    expect(dateInput).toHaveValue('')

    const nameInput = getInputByLabel('Full name')
    expect(nameInput).toHaveValue('Luis G')

  })

  test('update states when typing inputs', async () => {

    render(<MemoBookingPage />)

    const dateInput = getInputByLabel('Date')
    await userEvent.clear(dateInput)
    /* await userEvent.type(dateInput, '25-07-2025') */
    fireEvent.change(dateInput, { target: { value: '25-07-2025' }})
    expect(dateInput).toBe('25-07-2025')

    const nameInput = getInputByLabel('Full name')
    await userEvent.clear(nameInput)
    await userEvent.type(nameInput, 'Luis Gerardo')
    expect(nameInput.value).toBe('Luis Gerardo')
  })
})