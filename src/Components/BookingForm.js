import '../Styles/BookingForm.css'
import Input from './Input'

function BookingForm ({dispatch, availableTimes, formData, handleChange}) {

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
          wrapper={true}
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
              state: formData.guests,
              range: [1,10],
              styles: 'booking-input'
            }}
            handleChange={handleChange}
            wrapper={true}
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
              wrapper={true}
            >
              Ocassion
            </Input>
    </div>
  )
}

export default BookingForm