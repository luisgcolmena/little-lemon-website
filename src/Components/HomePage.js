import '../Styles/HomePage.css'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'
import logo from '../assets/restauranfood.jpg'

function HomePage() {
  return (
    <main className="homepage-container">
      <section className='intro-section'>
        <div className='intro-section-container'>
          <div className='intro-section-text'>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className='yellow-button'>Reserve a Table</button>
          </div>
          <div className='intro-img-container'>
            <img src={ logo } alt='restaurant food'/>
          </div>
        </div>
      </section>
      <Specials></Specials>
      <CustomersSay></CustomersSay>
      <Chicago></Chicago>
    </main>
  )
}

export default HomePage