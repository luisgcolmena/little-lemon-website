import '../Styles/BookingPage.css'
import '../Styles/BookingForm.css'
import HeroSection from "../Components/HeroSection"
import BookingForm from '../Components/BookingForm'
import ContactForm from "../Components/ContactForm"
import Summary from "../Components/Summary"
import { useState, useReducer } from 'react'

const initializeTimes = ['12:00', '13:00', '14:00', '15:00', '16:00']

const updateTimes = (times, date) => {
 /*  if (date) {
    return times
  } */

  switch(date) {
    case '2024-09-25':
      return ['14:00', '15:00', '16:00', '20:00', '23:00']
    case '2024-09-20':
      return ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
    default:
      return ['12:00', '13:00', '14:00', '15:00', '16:00']
  }
}

function BookingPage () {

  //Inicializar el estado de los campos de los forms de la pagina
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    phoneNumber: '+56 ',
    guests: 1,
    ocassion:'',
    notes: 'Additional Notes (Opcional)'
  })

  //Inicializar el estado de los horarios con useReducer para relacionarlo con la fecha
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes)

  const handleChange = (e) => {
    const {name, value} = e.target
    console.log(value)
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    }

  return (
    <main>
      <HeroSection />
      <form className='booking-page-form'>
        <h1 className='booking-title'>Book a table!</h1>
        <BookingForm
          dispatch={dispatch}
          availableTimes={availableTimes}
          formData={formData}
          handleChange={handleChange}
        />

        <ContactForm
          formData={formData} handleChange={handleChange}/>
        
        <Summary
          formData={formData}
          handleChange={handleChange}
          availableTimes={availableTimes}
        />
        <button 
          type='submit'
          className='yellow-button'
          onSubmit={handleSubmit}>
            Make your reservation!
        </button>
      </form>
    </main>
  )
}

export default BookingPage