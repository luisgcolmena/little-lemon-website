import '../Styles/BookingPage.css'

function BookingPage () {
  return (
    <form className='booking-form'>
      <div className='date-input'>
        <label htmlFor='date-input'><h2>Select Date</h2></label>
        <input type='date' id='date-input'/>
      </div>

      <div className='time-input'>
        <label htmlFor='time'><h2>Time</h2></label>
        <select id='time'>
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
        </select>
      </div>

      <div className='guests-input'>
        <label htmlFor='guests'><h3>Guests</h3></label>
        <input
            type='number'
            placeholder='1'
            min={1}
            max={10}
            id='guests'/>
      </div>

      <div className='ocassion-input'>
        <label htmlFor='ocassion'><h3>Occasion</h3></label>
        <select id='ocassion' placeholder='Select Occasion'>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option selected>Simple meal</option>
        </select>
      </div>
    </form>
  )
}

export default BookingPage