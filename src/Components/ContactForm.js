import { useState } from 'react'
import '../Styles/ContactForm.css'

function ContactForm ({formData, handleChange}) {

  const [requiredError, setRequiredError] = useState(false)

  const [errors, setErrors] = useState({
    nameError: false,
  })

  return (
    <div className='contact-form'>
      <h1>Contact Information</h1>
      <p className='contact-form-description'>You will receive an email to notify you that your reservation has been successful, and we will contact you 15 minutes before the scheduled time to confirm the reservation.</p>

      <div className='contact-form-texts'>
        <div className='contact-form-item'>
          <label>Full Name</label>
          <input
            name='name'
            type='text'
            placeholder='Boop'
            value={formData.name}
            className={requiredError ? 'contact-form-inputs contact-input-error' : 'contact-form-inputs'}
            onChange={handleChange}
            onBlur={(e) => {
              if (!e.target.value) {
                setRequiredError(true)
              } else if (e.target.value) {
                setRequiredError(false)
              }
            }}
          />
        {
          requiredError &&
          <p className='contact-error-text'>This field is required.</p>
        }
        </div>

        <div className='contact-form-item'>
        <label>Email</label>
        <input
          name='email'
          type='email'
          placeholder='email@gmail.com'
          className='contact-form-inputs'
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>

        <div className='contact-form-item'>
        <label>Phone Number</label>
        <input
          name='phoneNumber'
          type='number'
          placeholder='+56'
          className='contact-form-inputs'
          onChange={handleChange}
        />
        </div>
      </div>

      <div className='contact-form-item'>
        <label>Additional Notes</label>
        <textarea
          type='text'
          placeholder='Additional notes'
          className='contact-form-inputs notes'
        ></textarea>
      </div>

    </div>
  )
}

export default ContactForm