import BookingPage from "./BookingPage"
import {render, fireEvent, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import { userEvent } from '@testing-library/user-event'

const getInputByLabel = (inputLabel) => {
  const inputElement = screen.getByLabelText(inputLabel)
  return inputElement
}

//call onSubmit with the correct data when form is submitted

//does not call onSubmit if the form is incomplete

describe('renders form with initial values', () => {

  function MemoBookingPage () {
    return (
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    )
  }


  test('date input', () => {

    render(<MemoBookingPage />)

    const dateInput = getInputByLabel('Date')
    expect(dateInput).toHaveValue('')
  })

  test('name input', () => {

    render(<MemoBookingPage />)

    const nameInput = getInputByLabel('Full name')
    expect(nameInput).toHaveValue('Luis G')
  })
})

describe ('update states when typing inputs', () => {

  function MemoBookingPage () {
    return (
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    )
  }

  test('date input', async () => {

    render(<MemoBookingPage />)

    //Date input
    const dateInput = getInputByLabel('Date')
    await userEvent.clear(dateInput)
    await userEvent.type(dateInput, '2025-07-25')
    expect(dateInput.value).toBe('2025-07-25')

  })

  test('name input', async () => {

    render(<MemoBookingPage />)

    //Full name input
    const nameInput = getInputByLabel('Full name')
    await userEvent.clear(nameInput)
    await userEvent.type(nameInput, 'Luis Gerardo')
    expect(nameInput.value).toBe('Luis Gerardo')
    })

})

