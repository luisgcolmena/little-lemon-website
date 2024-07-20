import '../Styles/SpecialsCard.css'
import logo from '../assets/bruchetta.png'

function SpecialsCard() {
  return (
    <article className='specials-card'>
      <img src={ logo } />
      <div className='specials-card-texts'>
        <div className='specials-card-title'>
          <strong>Greek salad</strong>
          <b>$12.99</b>
        </div>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        <p>Order a delivery</p>
      </div>

    </article>
  )
}

export default SpecialsCard