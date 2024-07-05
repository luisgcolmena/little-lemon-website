import HeroSection from "./HeroSection"
import '../Styles/Main.css'
import SelectReservation from "./SelectReservation"

function Main() {
  return (
    <main>
      <HeroSection></HeroSection>
      <SelectReservation></SelectReservation>
      <section>Select Date and Time</section>
      <section>Contact Information</section>
      <section>Summary</section>
    </main>
  )
}

export default Main