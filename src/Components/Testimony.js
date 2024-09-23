import '../Styles/Testimony.css'
import femalelogo from '../assets/avatar-female.png'

function Testimony({rating, name, description}) {
  return (
    <div className='testimony-card'>
      <h3 className='testimony-rating'>
        {`${rating}/5 stars`}
      </h3>
      <div className='testimony-card-title'>
        <img src= { femalelogo } alt='female generic logo'/>
        <h3 className='testimony-name'>
          {name}
        </h3>
      </div>
      <p className='testimony-description'>
        { description }
      </p>
    </div>
  )
}

export default Testimony