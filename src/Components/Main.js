import HeroSection from "./HeroSection"
import '../Styles/Main.css'
import BookingPage from "./BookingPage"
import ContactForm from "./ContactForm"
import Summary from "./Summary"

function Main() {
  return (
    <main>
      <HeroSection></HeroSection>
      <BookingPage></BookingPage>
      <ContactForm></ContactForm>
      <Summary></Summary>
    </main>
  )
}

export default Main