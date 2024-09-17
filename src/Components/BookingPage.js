import '../Styles/BookingPage.css'
import BookingForm from './BookingForm'


function BookingPage ({dispatch, availableTimes}) {

  return (
    <>
      <h1 className='booking-title'>Book a table</h1>
      <BookingForm
        dispatch={dispatch}
        availableTimes={availableTimes}
      />
    </>
  )
}

export default BookingPage