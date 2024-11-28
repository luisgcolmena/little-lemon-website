import './BookingForm.css'
import Input from '../../Input/Input'
import { memo } from 'react'

const BookingForm = memo(function BookingForm ({dispatch, availableTimes}) {

  return (
    <div className='booking-form'>
      <Input
        inputConfig={{
            tag: 'input',
            type: 'date',
            name: 'date',
            id: 'date',
            styles: 'booking-input'
          }}
          dispatch={dispatch}
          wrapper={true}
      >
        Date
      </Input>

      <Input
        inputConfig={{
          tag: 'select',
          name: 'time',
          id: 'time',
          options: availableTimes,
          styles: 'booking-input'
        }}
        wrapper={true}
        >
          Time
        </Input>

          <Input
            inputConfig={{
              tag: 'input',
              type: 'number',
              name: 'guests',
              id: 'guests',
              range: [1,10],
              styles: 'booking-input'
            }}
            wrapper={true}
          >
            Guests
          </Input>

            <Input
              inputConfig={{
                tag: 'select',
                name: 'ocassion',
                id: 'ocassion',
                options: ['Birthday','Anniversary','Engagement','Simple meal'],
                placeHolder: 'Select Occasion',
                styles: 'booking-input'
              }}
              wrapper={true}
            >
              Ocassion
            </Input>
    </div>
  )
})

export default BookingForm