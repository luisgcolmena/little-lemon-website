import logo from '../../../assets/restaurant.jpg'
import './HeroSection.css'

function HeroSection () {

  return (
    <section className='hero-section'>
      <div className='hero-section-container'>
        <div className='hero-section-text'>
          <h1>Reserve a Table</h1>
          <p>Plan an intimate dinner, a celebration with friends, or a family meal with us. Reserve your table now and look forward to a delightful meal and warm atmosphere!</p>
        </div>
        <img src={ logo } alt='restaurant tables'/>
      </div>
    </section>
  )
}

export default HeroSection