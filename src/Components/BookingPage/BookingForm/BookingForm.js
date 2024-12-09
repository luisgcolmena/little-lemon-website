import './BookingForm.css'
import Input from '../../Input/Input'
import BookingInput from './BookingInput'
import getInputConfig from '../../../utils/getInputConfig'
import { useCallback } from 'react'

function BookingForm ({dispatch, availableTimes, formStates, errors, handleBlur}) {

  const { formValues, formSetValues } = formStates
  /* const dateConfig = useCallback(() => getInputConfig('date',availableTimes), [availableTimes]) */
  const dateConfig = getInputConfig('date')
  const timeConfig = getInputConfig('time',availableTimes)
  const guestsConfig = getInputConfig('guests')
  const ocassionConfig = getInputConfig('ocassion')

  return (
    <div className='booking-form'>

      <BookingInput label={'Date'} id={'date'} error={errors['date']}>
        <Input
          inputConfig={dateConfig}
          state={{
            inputState: formValues['date'],
            setState: formSetValues['date']
          }}
          handleBlur={handleBlur}
          dispatch={dispatch}
        />
      </BookingInput>

      <BookingInput label={'Time'} id={'time'} error={errors['time']}>
        <Input
          inputConfig={timeConfig}
          state={{
            inputState: formValues['time'],
            setState: formSetValues['time']
          }}
          handleBlur={handleBlur}
        />
      </BookingInput>

      <BookingInput label={'Guests'} id={'guests'} error={errors['guests']}>
        <Input
          inputConfig={guestsConfig}
          state={{
            inputState: formValues['guests'],
            setState: formSetValues['guests']
          }}
          handleBlur={handleBlur}
        />
      </BookingInput>

      <BookingInput label={'Ocassion'} id={'ocassion'} error={errors['ocassion']}>
        <Input
          inputConfig={ocassionConfig}
          state={{
            inputState: formValues['ocassion'],
            setState: formSetValues['ocassion']
          }}
          handleBlur={handleBlur}
        />
      </BookingInput>

      {/* <Input
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
      /> */}
    </div>
  )
}

export default BookingForm