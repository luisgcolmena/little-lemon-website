import './BookingForm.css'
import Input from '../../Input/Input'

function BookingForm ({dispatch, availableTimes, formStates, errors, handleBlur}) {

  const { formValues, formSetValues } = formStates

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
            setState: formSetValues.date,
            styles: 'booking-input'
          }}
          dispatch={dispatch}
          wrapper={true}
          error={errors['date']}
          handleBlur={handleBlur}
      />

      <Input
        inputConfig={{
          tag: 'select',
          name: 'time',
          id: 'time',
          options: availableTimes,
          label: 'Time',
          state: formValues.time,
          setState: formSetValues.time,
          styles: 'booking-input'
        }}
        wrapper={true}
        error={errors['time']}
        handleBlur={handleBlur}
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
          setState: formSetValues.guests,
          styles: 'booking-input'
        }}
        wrapper={true}
        errors={errors['guests']}
        handleBlur={handleBlur}
      />

      <Input
        inputConfig={{
          tag: 'select',
          name: 'ocassion',
          id: 'ocassion',
          options: ['Birthday','Anniversary','Engagement','Simple meal'],
          label: 'Ocassion',
          state: formValues.ocassion,
          setState: formSetValues.ocassion,
          placeHolder: 'Select Occasion',
          styles: 'booking-input'
        }}
        wrapper={true}
        errors={errors['ocassion']}
        handleBlur={handleBlur}
      />
    </div>
  )
}

export default BookingForm