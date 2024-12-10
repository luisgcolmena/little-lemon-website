import './BookingForm.css'
import Input from '../../Input/Input'
import BookingInput from './BookingInput'
import getInputConfig from '../../../utils/getInputConfig'

function BookingForm ({dispatch, availableTimes, formStates, errors, handleBlur}) {

  const { formValues, formSetValues } = formStates
  const dateConfig = getInputConfig('date')
  const timeConfig = getInputConfig('time',availableTimes)
  const guestsConfig = getInputConfig('guests')
  const ocassionConfig = getInputConfig('ocassion')

  return (
    <div className='booking-form'>

      <BookingInput label={'Date'} id={'date'} error={errors['date']}>
        <Input
          inputConfig={dateConfig}
          state={{inputState: formValues['date'],setState: formSetValues['date']}}
          handleBlur={handleBlur}
          dispatch={dispatch}
        />
      </BookingInput>

      <BookingInput label={'Time'} id={'time'} error={errors['time']}>
        <Input
          inputConfig={timeConfig}
          state={{inputState: formValues['time'],setState: formSetValues['time']}}
          handleBlur={handleBlur}
        />
      </BookingInput>

      <BookingInput label={'Guests'} id={'guests'} error={errors['guests']}>
        <Input
          inputConfig={guestsConfig}
          state={{inputState: formValues['guests'],setState: formSetValues['guests']}}
          handleBlur={handleBlur}
        />
      </BookingInput>

      <BookingInput label={'Ocassion'} id={'ocassion'} error={errors['ocassion']}>
        <Input
          inputConfig={ocassionConfig}
          state={{inputState: formValues['ocassion'],setState: formSetValues['ocassion']}}
          handleBlur={handleBlur}
        />
      </BookingInput>
    </div>
  )
}

export default BookingForm