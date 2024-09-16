import HeroSection from "./HeroSection"
import '../Styles/Reservations.css'
import BookingPage from "./BookingPage"
import ContactForm from "./ContactForm"
import Summary from "./Summary"
import { useReducer } from 'react'

const updateTimes = (times, date) => {
  if (date) {
    return times
  }
}
const initializeTimes = []

function Reservations() {


  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes)


  return (
    <main>
      <HeroSection />

      <BookingPage
        dispatch={dispatch}
        />
      <ContactForm />
      <Summary />
    </main>
  )
}

export default Reservations