import BookingPage from './BookingPage'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

//Test to validate valid and invalid inputs
describe('inputs testing', () => {

  test('testing date input', () => {

    render(
    <MemoryRouter>
      <BookingPage />
    </MemoryRouter>
    )

    const dateInput = screen.getByLabelText('Date')
  })
})
