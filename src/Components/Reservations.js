import HeroSection from "./HeroSection"
import '../Styles/Reservations.css'
import BookingPage from "./BookingPage"
import ContactForm from "./ContactForm"
import Summary from "./Summary"

function Reservations() {
  return (
    <main>
      <HeroSection></HeroSection>
      <BookingPage></BookingPage>
      <ContactForm></ContactForm>
      <Summary></Summary>
    </main>
  )
}

export default Reservations