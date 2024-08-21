import '../Styles/BookingPage.css'

function BookingPage () {
  return (
    <form className='booking-form'>
      <label htmlFor='date-input'>Date</label>
      <input type='date' id='date-input'/>

      <label htmlFor='time'>Time</label>
      <select id='time'>
        <option>12:00</option>
        <option>13:00</option>
        <option>14:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
      </select>

      <label htmlFor='guests'>Guests</label>
      <input
        type='number'
        placeholder='1'
        min={1}
        max={10}
        id='guests'/>

        <label>Occasion</label>
        <select placeholder='Select Occasion'>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option selected>Simple meal</option>
        </select>
    </form>
  )
}

export default BookingPage