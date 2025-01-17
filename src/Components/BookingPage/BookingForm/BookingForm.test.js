import BookingPage from '../BookingPage'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

const getInputByLabel = (inputLabel) => {
  const inputElement = screen.getByLabelText(inputLabel)
  return inputElement
}

//Test to validate valid and invalid inputs
describe('inputs testing', () => {

  function MemoComponent() {
    return (
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    )
  }

  test('testing date input remains without value if not selected', () => {

    render(<MemoComponent />)

    const dateInput = getInputByLabel('Date')
    fireEvent.focus(dateInput)
    fireEvent.blur(dateInput)

    expect(dateInput.value).toBe("")
  })

  test('error text to not show if onBlur is not activated', () => {
    render(<MemoComponent />)

    const errorTextOff = screen.queryByText('Field required')
    expect(errorTextOff).toBeNull()
  } )

  test('error text to show if onBlur is activated', () => {
    render(<MemoComponent />)

    const dateInput = getInputByLabel('Date')
    fireEvent.focus(dateInput)
    fireEvent.blur(dateInput)
    const errorTextOn = screen.queryByText('Field required')
    expect(errorTextOn).toBeInTheDocument()
  })
})
