import '../Styles/BookingForm.css'
import Input from './Input'
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
    <div className='booking-form'>
      <Input
        inputConfig={{
            tag: 'input',
            type: 'date',
            name: 'date',
            id: 'date',
            state: formData.date,
            styles: 'booking-input'
          }}
          state={formData.date}
          handleChange={handleChange}
          dispatch={dispatch}
      >
        Date
      </Input>

      <Input
        inputConfig={{
          tag: 'select',
          name: 'time',
          id: 'time',
          state: formData.time,
          options: availableTimes,
          styles: 'booking-input'
        }}
        handleChange={handleChange}
        >
          Time
        </Input>

          <Input
            inputConfig={{
              tag: 'input',
              type: 'number',
              name: 'guests',
              id: 'guests',
              state: formData.guests,
              range: [1,10],
              styles: 'booking-input'
            }}
            handleChange={handleChange}
          >
            Guests
          </Input>

            <Input
              inputConfig={{
                tag: 'select',
                name: 'ocassion',
                id: 'ocassion',
                state: formData.ocassion,
                options: ['Birthday','Anniversary','Engagement','Simple meal'],
                placeHolder: 'Select Occasion',
                styles: 'booking-input'
              }}
              handleChange={handleChange}
            >
              Ocassion
            </Input>
      {/* <div className={errors.dateError ? 'div-input input-error' : 'div-input'}>
        <label htmlFor='date-input'><h3>Date</h3></label>
        <input
          name='date'
          type='date'
          id='date-input'
          value={formData.date}
          className={errors.dateError ? 'input-error' : ''}
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
      </div> */}
    </div>
  )
}

export default BookingForm