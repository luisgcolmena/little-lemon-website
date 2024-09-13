import { useState } from 'react'
import '../Styles/BookingForm.css'

function BookingForm () {

  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [guests, setGuests] = useState(1)
  const [ocassion, setOcassion] = useState("")


  return (
    <form className='booking-form'>

      <div className='date div-input'>
        <label htmlFor='date-input'><h3>Date</h3></label>
        <input
          type='date'
          id='date-input'
          value={date}
          onChange={(e)=> setDate(e.target.value)}
        />
      </div>

      <div className='time div-input'>
        <label htmlFor='time'><h3>Time</h3></label>
        <select
          id='time'
          value={time}
          onChange={(e)=> setTime(e.target.value)}
        >
          <option>12:00</option>
          <option>13:00</option>
          <option>14:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
        </select>
      </div>

      <div className='guests div-input'>
        <label htmlFor='guests'><h3>Guests</h3></label>
        <input
            type='number'
            value={guests}
            placeholder='1'
            min={1}
            max={10}
            id='guests'
            onChange={(e)=> setGuests(e.target.value)}
            />
      </div>

      <div className='ocassion div-input'>
        <label htmlFor='ocassion'><h3>Occasion</h3></label>
        <select
          id='ocassion'
          placeholder='Select Occasion'
          value={ocassion}
          onChange={(e)=> setOcassion(e.target.value)}
          >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option selected>Simple meal</option>
        </select>
      </div>

      <button type='submit' className='yellow-button'>Make your reservation!</button>
    </form>
  )
}

export default BookingForm