import './BookingForm.css'
import Input from '../../Input/Input'

const BookingForm = function BookingForm ({dispatch, availableTimes, formValues}) {

  return (
    <div className='booking-form'>
      <Input
        inputConfig={{
            tag: 'input',
            type: 'date',
            name: 'date',
            id: 'date',
            label: 'Date',
            state: formValues.date,
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
          state: formValues.time,
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
              state: formValues.guests,
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
                state: formValues.ocassion,
                placeHolder: 'Select Occasion',
                styles: 'booking-input'
              }}
              wrapper={true}
            />
    </div>
  )
}

export default BookingForm