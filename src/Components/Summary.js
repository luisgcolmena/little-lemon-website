import '../Styles/Summary.css'

function Summary() {
  return (
    <section className='summary-section'>
      <div className='summary-section-container'>
        <h1>Reservation Summary</h1>
        <div className='summary-container'>
          <div className='summary-item'>
            <p>Date:</p>
            <p>25/07/2024</p>
          </div>
          <div className='summary-item'>
            <p>Table:</p>
            <p>Outside / 13:00</p>
          </div>
          <div className='summary-item'>
            <p>N° Diners:</p>
            <p>5</p>
          </div>
          <div className='summary-item'>
            <p>Notes:</p>
            <p className='summary-notes'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='summary-item'>
            <p>Occasion:</p>
            <p>Birthday</p>
          </div>
        </div>
      </div>
      <button className='reservation-button'>Confirm reservation</button>
    </section>
  )
}

export default Summary