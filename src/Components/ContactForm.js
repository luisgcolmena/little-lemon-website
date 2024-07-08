import '../Styles/ContactForm.css'

function ContactForm () {
  return (
    <form className='contact-form'>
      <h1>Contact Information</h1>
      <p>You will receive an email to notify you that your reservation has been successful, and we will contact you 15 minutes before the scheduled time to confirm the reservation.</p>
      
      <div className='contact-form-texts'>
        <div className='contact-form-item'>
          <label>Full Name</label>
          <input type='text' placeholder='Luis Colmenares' className='inputs'></input>
        </div>

        <div className='contact-form-item'>
        <label>Email</label>
        <input type='email' placeholder='email@gmail.com' className='inputs'></input>
        </div>

        <div className='contact-form-item'>
        <label>Phone Number</label>
        <input type='number' placeholder='+56' className='inputs'></input>
        </div>
      </div>

      <div className='contact-form-item'>
        <label>Additional Notes</label>
        <textarea type='text' placeholder='Additional notes' className='notes'></textarea>
      </div>

    </form>
  )
}

export default ContactForm