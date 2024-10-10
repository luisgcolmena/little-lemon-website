import '../Styles/BookingPage.css'
import '../Styles/BookingForm.css'
import HeroSection from "../Components/HeroSection"
import BookingForm from '../Components/BookingForm'
import ContactForm from "../Components/ContactForm"
import Summary from "../Components/Summary"
import { useState, useReducer } from 'react'

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
const submitAPI = function(formData) {
  return true;
};

export const initializeTimes2 = ['12:00', '13:00', '14:00', '15:00', '16:00']
export const initializeTimes = fetchAPI(new Date())

export const updateTimes = (times, date) => {

  console.log(`Estado antes: ${date}`)
  const dateObject = new Date(date)
  const timesByDate = fetchAPI(dateObject)

  console.log(`Estado después: ${timesByDate}`)

  if (date) {
    return timesByDate
  }

}

function BookingPage () {

  //Inicializar el estado de los campos de los forms de la pagina
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '00:00',
    phoneNumber: '+56 ',
    email: '',
    guests: '7',
    ocassion:'Birthday',
    notes: 'Additional Notes (Opcional)'
  })

  //Inicializar el estado de los horarios con useReducer para relacionarlo con la fecha
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes)

  const submitForm = (data) => {
      submitAPI(data)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formDataSubmit = {
      name: formData.name,
      date: formData.date,
      time: formData.time,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      guests: formData.guests,
      ocassion: formData.ocassion,
      notes: formData.notes
    }
    submitForm(formDataSubmit)
  }



  return (
    <main>
      <HeroSection />
      <form onSubmit={handleSubmit} className='booking-page-form'>
        <h1 className='booking-title'>Book a table!</h1>
        <BookingForm
          dispatch={dispatch}
          availableTimes={availableTimes}
          formData={formData}
          handleChange={handleChange}
        />

        <ContactForm
          formData={formData}
          handleChange={handleChange}
        />

        <Summary
          formData={formData}
          availableTimes={availableTimes}
        />
        <button
          type='submit'
          className='yellow-button'
        >
            Make your reservation!
        </button>
      </form>
    </main>
  )
}

export default BookingPage