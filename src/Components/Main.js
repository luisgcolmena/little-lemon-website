import HeroSection from "./HeroSection"
import '../Styles/Main.css'
import SelectReservation from "./SelectReservation"
import ContactForm from "./ContactForm"

function Main() {
  return (
    <main>
      <HeroSection></HeroSection>
      <SelectReservation></SelectReservation>
      <ContactForm></ContactForm>
      <section>Contact Information</section>
      <section>Summary</section>
    </main>
  )
}

export default Main