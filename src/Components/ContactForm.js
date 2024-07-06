import '../Styles/ContactForm.css'

function ContactForm () {
  return (
    <form className='contact-form'>
      <h1>Contact Information</h1>
      <p>You will receive an email to notify you that your reservation has been successful, and we will contact you 15 minutes before the scheduled time to confirm the reservation.</p>
      
      <div className='contact-form-item'>
        <label>Full Name</label>
        <input></input>
      </div>

      <div className='contact-form-item'>
      <label>Email</label>
      <input></input>
      </div>

      <div className='contact-form-item'>
      <label>Phone Number</label>
      <input></input>
      </div>

      <div className='contact-form-item'>
        <label>Additional Notes</label>
        <input></input>
      </div>

    </form>
  )
}

export default ContactForm