import BookingPage from "./BookingPage"
import {fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, useNavigate } from "react-router-dom"
import { userEvent } from '@testing-library/user-event'
import '@testing-library/jest-dom'

const getInputByLabel = (inputLabel) => {
  const inputElement = screen.getByLabelText(inputLabel)
  return inputElement
}

function MemoBookingPage () {
  return (
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
  )}

  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn()
  }))

describe('renders form with initial values', () => {

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
    expect(nameInput).toHaveValue('')
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
})

describe ('update states when typing inputs', () => {

  //Date input
  test('date input', async () => {
    render(<MemoBookingPage />)
    const dateInput = getInputByLabel('Date')
    await userEvent.clear(dateInput)
    await userEvent.type(dateInput, '2025-07-25')
    expect(dateInput.value).toBe('2025-07-25')

  })

  //Time input
  test('time input', async () => {
    render(<MemoBookingPage />)
    const dateInput = getInputByLabel('Date')
    await userEvent.type(dateInput, '2025-07-25')
    const timeInput = getInputByLabel('Time')
    await userEvent.selectOptions(timeInput, '19:00')
    expect(timeInput.value).toBe('19:00')
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

  //Phone number input
  test('phone number input', async () => {
    render(<MemoBookingPage />)
    const phoneInput = getInputByLabel('Phone number')
    await userEvent.type(phoneInput, '12345')
    expect(phoneInput.value).toBe('12345')
  })

  //Additional notes input
  test('additional notes input', async () => {
    render(<MemoBookingPage />)
    const notesInput = getInputByLabel('Additional notes')
    await userEvent.type(notesInput, 'Sombri es hermoso')
    expect(notesInput.value).toBe('Sombri es hermoso')
  })

})

describe('call onSubmit with the correct data when form is submitted', () => {

  test('submit button renders', () => {
    render(<MemoBookingPage />)
    const submitButton = screen.getByRole('button', {name: 'Make your reservation!'})
    expect(submitButton).toBeInTheDocument()
  })

  test('subtmit button to be disabled', () => {
    render(<MemoBookingPage />)
    const submitButton = screen.getByRole('button', {name: 'Make your reservation!'})
    userEvent.click(submitButton)
    expect(submitButton).toBeDisabled()
  })

  test('submit button to be enabled', async () => {
    render(<MemoBookingPage />)

    const dateInput = screen.getByLabelText('Date')
    await userEvent.type(dateInput, '2025-07-25')

    const timeInput = screen.getByLabelText('Time')
    await userEvent.type(timeInput, '20:30')

    const guestsInput = screen.getByLabelText('Guests')
    await userEvent.type(guestsInput, '5')

    const ocassionInput = screen.getByLabelText('Ocassion')
    await userEvent.selectOptions(ocassionInput, 'Simple meal')

    const nameInput = screen.getByLabelText('Full name')
    await userEvent.type(nameInput, 'Luis Gerardo')

    const emailInput = screen.getByLabelText('Email')
    await userEvent.type(emailInput, 'luiscol62@gmail.com')

    const phoneInput = screen.getByLabelText('Phone number')
    await userEvent.type(phoneInput, '976302616')

    const submitButton = screen.getByRole('button', {name: 'Make your reservation!'})
    expect(submitButton).toBeEnabled()
  })

  test('submit button redirects correctly to confirmation page', async () => {

    const navigate = jest.fn()
    useNavigate.mockReturnValue(navigate)

    render(<MemoBookingPage />)
    const dateInput = screen.getByLabelText('Date')
    await userEvent.type(dateInput, '2025-07-25')

    const timeInput = screen.getByLabelText('Time')
    await userEvent.type(timeInput, '20:30')

    const guestsInput = screen.getByLabelText('Guests')
    await userEvent.type(guestsInput, '5')

    const ocassionInput = screen.getByLabelText('Ocassion')
    await userEvent.selectOptions(ocassionInput, 'Simple meal')

    const nameInput = screen.getByLabelText('Full name')
    await userEvent.type(nameInput, 'Luis Gerardo')

    const emailInput = screen.getByLabelText('Email')
    await userEvent.type(emailInput, 'luiscol62@gmail.com')

    const phoneInput = screen.getByLabelText('Phone number')
    await userEvent.type(phoneInput, '976302616')

    const submitButton = screen.getByRole('button', {name: 'Make your reservation!'})
    await userEvent.click(submitButton)
    expect(navigate).toHaveBeenCalledWith('/confirmation')
  })

})

describe('error text', () => {

  test('when date input is empty after onBlur', async () => {
    render(<MemoBookingPage />)
    const dateInput = screen.getByLabelText('Date')
    await userEvent.click(dateInput)
    await userEvent.tab()
    const errorText = await screen.findByText('Field required')
    expect(errorText).toBeInTheDocument()
  })

  test('when name input is empty after onBlur', async () => {
    render(<MemoBookingPage />)
    const nameInput = screen.getByLabelText('Full name')
    fireEvent.blur(nameInput)
    const errorText = await screen.findByText('Field required')
    expect(errorText).toBeInTheDocument()
  })

  test('before error occurs', () => {
    render(<MemoBookingPage />)
    const errorText = screen.queryByText('Field required')
    expect(errorText).toBeNull()
  })
})