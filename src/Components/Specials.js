import '../Styles/Specials.css'
import SpecialsCard from './SpecialsCard'
import bruchetta_logo from '../assets/bruchetta.png'
import greek_salad_logo from '../assets/greek salad.jpg'
import lemon_dessert_logo from '../assets/lemon dessert.jpg'

function Specials() {

  const specialsList = [{
    name: 'Greek salad',
    price: 12.99,
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    img_url: { bruchetta_logo }
  },{
    name: 'Bruchetta',
    price: 5.99,
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    img_url: './assets/bruchetta.png'
  },{
    name: 'Lemon Dessert',
    price: 5.00,
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img_url: '../assets/lemon dessert.jpg' 
  }]

  return (
    <section className="specials-container">
      <div className='specials-texts'>
        <h1>This weeks specials!</h1>
        <button className='yellow-button'>Online Menu</button>
      </div>
      <div className='specials-cards-container'>
        {
          specialsList.map((item, index) => (
            <SpecialsCard key={ index } {...item}/>
          ) )
        }
      </div>
    </section>
  )
}

export default Specials