import '../Styles/BookingForm.css'
import { useState } from 'react'

function BookingForm ({dispatch, availableTimes, formData, handleChange}) {

  const [errors, setErrors] = useState({
    dateError: false,
  })

  const validateInputs = () => {
    if (formData.date < new Date()) {
      console.log('Tenemos un problemilla')
    }
  }

  return (
    <>
      <div className={errors.dateError ? 'date div-input input-error' : 'date div-input'}>
        <label htmlFor='date-input'><h3>Date</h3></label>
        <input
          name='date'
          type='date'
          id='date-input'
          value={formData.date}
          /* className={errors.dateError ? 'input-error' : ''} */
          onChange={(e)=> {
            handleChange(e)
            dispatch(e.target.value)
          }}
          onBlur={(e) => {
            if (!e.target.value) {
              setErrors({
                ...errors,
                dateError: true
              })
            } else if (e.target.value) {
              setErrors({
                ...errors,
                dateError: false
              })
            }
          }}
          required
          min={new Date().toISOString().split('T')[0]}
        />

      </div>
        {
          errors.dateError &&
          <p className='error-text'>You need to select a date.</p>
        }

      <div className='time div-input'>
        <label htmlFor='time'><h3>Time</h3></label>
        <select
          name='time'
          id='time'
          data-testid='time-select'
          value={formData.time}
          onChange={handleChange}
        >
          {
            availableTimes.map((hour, index) => {
              return (
                <option key={index} value={hour}>{ hour }</option>
              )
            })
          }
        </select>
      </div>

      <div className='guests div-input'>
        <label htmlFor='guests'><h3>Guests</h3></label>
        <input
            type='number'
            name='guests'
            value={formData.guests}
            placeholder='1'
            min={1}
            max={10}
            id='guests'
            onChange={handleChange}
            />
      </div>

      <div className='ocassion div-input'>
        <label htmlFor='ocassion'><h3>Occasion</h3></label>
        <select
          name='ocassion'
          id='ocassion'
          data-testid='ocassion-select'
          placeholder='Select Occasion'
          value={formData.ocassion}
          onChange={handleChange}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Simple meal</option>
        </select>
      </div>
    </>
  )
}

export default BookingForm