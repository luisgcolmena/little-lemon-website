import HeroSection from "./HeroSection"
import '../Styles/Main.css'
import SelectReservation from "./SelectReservation"
import ContactForm from "./ContactForm"
import Summary from "./Summary"

function Main() {
  return (
    <main>
      <HeroSection></HeroSection>
      <SelectReservation></SelectReservation>
      <ContactForm></ContactForm>
      <Summary></Summary>
    </main>
  )
}

export default Main