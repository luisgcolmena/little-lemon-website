import '../Styles/BookingPage.css'
import BookingForm from './BookingForm'


function BookingPage (dispatch) {

  return (
    <>
      <h1 className='booking-title'>Book a table</h1>
      <BookingForm
        dispatch={dispatch}
      />
    </>
  )
}

export default BookingPage