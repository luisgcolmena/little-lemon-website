import HeroSection from "./HeroSection"
import '../Styles/Reservations.css'
import BookingPage from "./BookingPage"
import ContactForm from "./ContactForm"
import Summary from "./Summary"
import { useReducer } from 'react'

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

function Reservations() {


  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes)


  return (
    <main>
      <HeroSection />

      <BookingPage
        dispatch={dispatch}
        availableTimes={availableTimes}
        />
      <ContactForm />
      <Summary />
    </main>
  )
}

export default Reservations