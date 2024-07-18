import '../Styles/HomePage.css'
import Specials from './Specials'
import CustomersSay from './CustomersSay'
import Chicago from './Chicago'

function HomePage() {
  return (
    <main className="homepage-container">
      <h1 className="homepage-title">Home Page</h1>
      <Specials></Specials>
      <CustomersSay></CustomersSay>
      <Chicago></Chicago>
    </main>
  )
}

export default HomePage