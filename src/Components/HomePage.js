import '../Styles/HomePage.css'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'

function HomePage() {
  return (
    <main className="homepage-container">
      <section className='intro-section'>
        <div className='intro-section-container'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className='reservation-button'>Reserve a Table</button>

        </div>
      </section>
      <h1 className="homepage-title">Home Page</h1>
      <Specials></Specials>
      <CustomersSay></CustomersSay>
      <Chicago></Chicago>
    </main>
  )
}

export default HomePage