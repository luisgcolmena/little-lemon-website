import '../Styles/Summary.css'

function Summary({formData, availableTimes}) {
  return (
    <section className='summary-section'>
      <div className='summary-section-container'>
        <h1>Reservation Summary</h1>
        <div className='summary-container'>

          <div className='summary-item'>
            <p>Name:</p>
            <p>{formData.name ? formData.name : 'Full Name'}</p>
          </div>

          <div className='summary-item'>
            <p>email:</p>
            <p>{formData.email ? formData.email : 'exaxmple@gmail.com'}</p>
          </div>

          <div className='summary-item'>
            <p>Phone Number:</p>
            <p>{formData.phoneNumber && formData.phoneNumber}</p>
          </div>

          <div className='summary-item'>
            <p>Date:</p>
            <p>{formData.date ? formData.date : 'dd-mm-aaaa'}</p>
          </div>

          <div className='summary-item'>
            <p>Time:</p>
            <p>{/* {avial ? formData.date : 'dd-mm-aaaa'} */}</p>
          </div>

          <div className='summary-item'>
            <p>N° Guests:</p>
            <p>{availableTimes ? formData.guests : 'dd-mm-aaaa'}</p>
          </div>

          <div className='summary-item'>
            <p>Occasion:</p>
            <p>{formData.ocassion && formData.ocassion}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
                 
export default Summary