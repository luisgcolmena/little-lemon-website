import BookingPage from "./BookingPage"
import {render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import { userEvent } from '@testing-library/user-event'

const getInputByLabel = (inputLabel) => {
  const inputElement = screen.getByLabelText(inputLabel)
  return inputElement
}

//call onSubmit with the correct data when form is submitted

//does not call onSubmit if the form is incomplete

/* describe('renders form with initial values', () => {

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
    expect(dateInput.value).toBe('')
  })

  test('time input', () => {
    render(<MemoBookingPage />)
    const timeInput = getInputByLabel('Time')
    expect(timeInput.value).toBe('17:00')
  })

  test('guests input', () => {
    render(<MemoBookingPage />)
    const guestsInput = getInputByLabel('Guests')
    expect(guestsInput.value).toBe('1')
  })

  test('ocassion input', () => {
    render(<MemoBookingPage />)
    const ocassionInput = getInputByLabel('Ocassion')
    expect(ocassionInput.value).toBe('Birthday')
  })

  test('name input', () => {
    render(<MemoBookingPage />)
    const nameInput = getInputByLabel('Full name')
    expect(nameInput).toHaveValue('Luis G')
  })

  test('email input', () => {
    render(<MemoBookingPage />)
    const emailInput = getInputByLabel('Email')
    expect(emailInput.value).toBe('')
  })

  test('phone number input', () => {
    render(<MemoBookingPage />)
    const phoneNumberInput = getInputByLabel('Phone number')
    expect(phoneNumberInput.value).toBe("")
  })
}) */

describe ('update states when typing inputs', () => {

  function MemoBookingPage () {
    return (
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    )
  }

  //Date input
  test('date input', async () => {

    render(<MemoBookingPage />)
    const dateInput = getInputByLabel('Date')
    await userEvent.clear(dateInput)
    await userEvent.type(dateInput, '2025-07-25')
    expect(dateInput.value).toBe('2025-07-25')

  })

  //Guests input
  test('guests input', async () => {
    render(<MemoBookingPage />)
    const guestsInput = getInputByLabel('Guests')
    await userEvent.clear(guestsInput)
    await userEvent.type(guestsInput, '7')
    expect(guestsInput.value).toBe('7')
  })

  //Ocassion input
  test('ocassion input', async () => {
    render(<MemoBookingPage />)
    const ocassionInput = getInputByLabel('Ocassion')
    await userEvent.selectOptions(ocassionInput, 'Simple meal')
    expect(ocassionInput.value).toBe('Simple meal')
  })

  //Full name input
  test('name input', async () => {
    render(<MemoBookingPage />)
    const nameInput = getInputByLabel('Full name')
    await userEvent.clear(nameInput)
    await userEvent.type(nameInput, 'Luis Gerardo')
    expect(nameInput.value).toBe('Luis Gerardo')
    })

  //Email input
  test('email input', async () => {
    render(<MemoBookingPage />)
    const emailInput = getInputByLabel('Email')
    await userEvent.type(emailInput, 'luiscol620@gmail.com')
    expect(emailInput.value).toBe('luiscol620@gmail.com')
  })

  test('phone number input', async () => {
    render(<MemoBookingPage />)
    const phoneInput = getInputByLabel('Phone number')
    await userEvent.type(phoneInput, 'boop')
    expect(phoneInput.value).toBe('9765')
  })

})

