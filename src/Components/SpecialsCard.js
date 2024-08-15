import '../Styles/SpecialsCard.css'

function SpecialsCard({name, price, description, img_url}) {
  const imgUrl = img_url
  return (
    <article className='specials-card'>
      <img src={ imgUrl } />
      <div className='specials-card-texts'>
        <div className='specials-card-title'>
          <strong>{ name }</strong>
          <b>${ price }</b>
        </div>
        <p>{ description }</p>
        <p>Order a delivery</p>
      </div>

    </article>
  )
}

export default SpecialsCard