import '../Styles/Testimonials.css'
import Testimony from './Testimony'

const testimonialsContent = [{
  rating: 5,
  name: 'Alex Johnson',
  description: 'Delicious food, perfectly crafted cocktails, and a lively, casual atmosphere. Friendly staff made our evening memorable. Highly recommended!'
},{
  rating: 4.5,
  name: 'Sarah Thompson',
  description: "Little Lemon is a gem with fantastic food and cocktails. The ambiance was great, though a bit noisy. We will definitely return!" 
}, {
  rating: 4,
  name: 'Mark Davis',
  description: 'Tasty food with fresh ingredients and delicious cocktails. The lively vibe was perfect, though service was a bit slow. Wonderful experience!' 
}, {
  rating: 4.5,
  name: 'Emily Brown',
  description: "Fresh, locally-sourced dishes and classic cocktails in a relaxed atmosphere. Friendly service, though a bit slow at peak times. We'll be back!"
}
]

function Testimonials() {
 
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h1>Testimonials</h1>
      <div className='testimonials-cards-container'>
        {
          testimonialsContent.map( (item, index) => (
            <Testimony key={index} {...item}/>
            )
          )
        }
      </div>
      </div>
    </section>
  )
}
export default Testimonials