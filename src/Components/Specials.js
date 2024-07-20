import '../Styles/Specials.css'
import SpecialsCard from './SpecialsCard'

function Specials() {
  return (
    <section className="specials-container">
      <div className='specials-texts'>
        <h1>This weeks specials!</h1>
        <button className='yellow-button'>Online Menu</button>
      </div>
      <div className='specials-cards-container'>
        <SpecialsCard />
        <SpecialsCard />
        <SpecialsCard />
      </div>
    </section>
  )
}

export default Specials