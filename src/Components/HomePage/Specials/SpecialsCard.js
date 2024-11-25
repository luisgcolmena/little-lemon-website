import './SpecialsCard.css'

function SpecialsCard({name, price, description, img_code}) {
  return (
    <article className='specials-card'>
      <img src={ `/food-images/${img_code}` } alt='imagen del plato' />
      <div className='specials-card-texts'>
        <div className='specials-card-title'>
          <strong>{ name }</strong>
          <b>{`$ ${price}` }</b>
        </div>
        <p>{ description }</p>
        <p>Order a delivery</p>
      </div>

    </article>
  )
}

export default SpecialsCard