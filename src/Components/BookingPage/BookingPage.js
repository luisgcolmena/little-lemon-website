import './BookingPage.css'
import HeroSection from './HeroSection/HeroSection'
import BookingForm from './BookingForm/BookingForm'
import ContactForm from './ContactForm/ContactForm'
import Summary from './Summary/Summary'
import { useReducer, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormValues } from '../../hooks/useFormValues'

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

  const {formValues, formSetValues} = useFormValues()
  /* const isDisabled = errors ? true : false */

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    /* const formDataSubmit = {
      name: formData.name,
      date: formData.date,
      time: formData.time,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      guests: formData.guests,
      ocassion: formData.ocassion,
      notes: formData.notes
    } */
    const formSubmitted = submitAPI()

    if (formSubmitted) {
      navigate('/confirmation')
    }
  }

  console.log('Renderizado de toda la BookingPage')

  return (
    <main>
      <HeroSection />
        <form onSubmit={handleSubmit} className='booking-page-form'>
          <h1 className='booking-title'>Book a table!</h1>

          <BookingForm
            dispatch={dispatch}
            availableTimes={availableTimes}
            formValues={formValues}
          />

          <ContactForm
            formValues={formValues}
          />

          <Summary
            availableTimes={availableTimes}
            formValues={formValues}
          />

          <button
            type='submit'
            className='yellow-button'
            /* disabled={ isDisabled } */
          >
              Make your reservation!
          </button>
        </form>
    </main>
  )
}

export default BookingPage