import { useState } from 'react'
import '../Styles/BookingForm.css'

function BookingForm ({dispatch, availableTimes}) {

  const [date, setDate] = useState("")
  const [guests, setGuests] = useState(1)
  const [ocassion, setOcassion] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='booking-form'>

      <div className='date div-input'>
        <label htmlFor='date-input'><h3>Date</h3></label>
        <input
          type='date'
          id='date-input'
          value={date}
          onChange={(e)=> {
            setDate(e.target.value)
            dispatch(e.target.value)
            console.log(e.target.value)
          }}
        />
      </div>

      <div className='time div-input'>
        <label htmlFor='time'><h3>Time</h3></label>
        <select
          id='time'
          /* value={[12,13,14]}
          onChange={(e)=> {
            setAvailableTimes(e.target.value)
          }} */
        >
          {
            availableTimes.map((hour) => <option>{hour}</option>)
          }

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

      <button 
        type='submit'
        className='yellow-button'
        onSubmit={handleSubmit}>
          Make your reservation!
      </button>
    </form>
  )
}

export default BookingForm