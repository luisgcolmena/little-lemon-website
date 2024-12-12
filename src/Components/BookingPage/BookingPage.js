import './BookingPage.css'
import HeroSection from './HeroSection/HeroSection'
import BookingForm from './BookingForm/BookingForm'
import ContactForm from './ContactForm/ContactForm'
import Summary from './Summary/Summary'
import { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormValues } from '../../hooks/useFormValues'
import useInputValidation from '../../hooks/useInputValidation'

// API del curso para obtener listado de horas de acuerdo a la fecha.
const seededRandom = function (seed) {
  var m = 2**35 - 31
  var a = 185852
  var s = seed % m
  return function () {
      return (s = s * a % m) / m
  };
}
const fetchAPI = function(date) {
  let result = []
  let random = seededRandom(date.getDate())

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00')
      }
      if(random() < 0.5) {
          result.push(i + ':30')
      }
  }
  return result;
};
const submitAPI = function() {
  return true;
};

export const initializeTimes = fetchAPI(new Date())

export const updateTimes = (times, date) => {

  const dateObject = new Date(date)
  const timesByDate = fetchAPI(dateObject)

  if (date) {
    return timesByDate
  }

}

function BookingPage () {

  //Inicializar el estado de los horarios con useReducer para relacionarlo con la fecha
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes)
  const {errors, handleBlur} = useInputValidation()
  const formStates = useFormValues()
  const navigate = useNavigate()

  const checkEnabled = () => {
    if (Object.values(errors).length === 0) {
      return false
    } else {
      return Object.values(errors).every((item) => item === '') ? false : true
    }
  }
  const checkValues = (states) => {
    return states.every((state) => state !== '')
  }
  const isEnabled = checkEnabled()
  /* const isEnabled = !checkEnabled() || checkValues(Object.values(formStates.formValues)) */

  const handleSubmit = (e) => {
    e.preventDefault()
    const formSubmitted = submitAPI()

    if (formSubmitted) {
      navigate('/confirmation')
    }
  }
  console.log(isEnabled)
  console.log(errors)
  /* console.log(formStates.formValues) */
  return (
    <main>
      <HeroSection />
        <form onSubmit={handleSubmit} className='booking-page-form'>
          <h1 className='booking-title'>Book a table!</h1>

          <BookingForm
            dispatch={dispatch}
            availableTimes={availableTimes}
            formStates={formStates}
            errors={errors}
            handleBlur={handleBlur}
          />

          <ContactForm
            formStates={formStates}
            errors={errors}
            handleBlur={handleBlur}
          />

          <Summary
            availableTimes={availableTimes}
            formValues={formStates.formValues}
          />

          <button
            type='submit'
            className='yellow-button'
            disabled={ true }
          >
              Make your reservation!
          </button>
        </form>
    </main>
  )
}

export default BookingPage