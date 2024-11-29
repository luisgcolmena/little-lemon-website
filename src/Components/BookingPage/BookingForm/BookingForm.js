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
            label: 'Date',
            styles: 'booking-input'
          }}
          dispatch={dispatch}
          wrapper={true}
      />

      <Input
        inputConfig={{
          tag: 'select',
          name: 'time',
          id: 'time',
          options: availableTimes,
          label: 'Time',
          styles: 'booking-input'
        }}
        wrapper={true}
        />

          <Input
            inputConfig={{
              tag: 'input',
              type: 'number',
              name: 'guests',
              id: 'guests',
              range: [1,10],
              label: 'Guests',
              styles: 'booking-input'
            }}
            wrapper={true}
          />

            <Input
              inputConfig={{
                tag: 'select',
                name: 'ocassion',
                id: 'ocassion',
                options: ['Birthday','Anniversary','Engagement','Simple meal'],
                label: 'Ocassion',
                placeHolder: 'Select Occasion',
                styles: 'booking-input'
              }}
              wrapper={true}
            />
    </div>
  )
})

export default BookingForm