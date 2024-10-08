import '../Styles/ContactForm.css'

function ContactForm ({formData, handleChange}) {

  return (
    <div className='contact-form'>
      <h1>Contact Information</h1>
      <p>You will receive an email to notify you that your reservation has been successful, and we will contact you 15 minutes before the scheduled time to confirm the reservation.</p>

      <div className='contact-form-texts'>
        <div className='contact-form-item'>
          <label>Full Name</label>
          <input
            name='name'
            type='text'
            placeholder='Boop'
            value={formData.name}
            className='inputs'
            onChange={handleChange}
          />
        </div>

        <div className='contact-form-item'>
        <label>Email</label>
        <input
          name='email'
          type='email'
          placeholder='email@gmail.com'
          className='inputs'
          value={formData.email}
          onChange={handleChange}
        />
        </div>

        <div className='contact-form-item'>
        <label>Phone Number</label>
        <input
          name='phoneNumber'
          type='number'
          placeholder='+56'
          className='inputs'
          onChange={handleChange}
        />
        </div>
      </div>

      <div className='contact-form-item'>
        <label>Additional Notes</label>
        <textarea type='text' placeholder='Additional notes' className='notes'></textarea>
      </div>

    </div>
  )
}

export default ContactForm