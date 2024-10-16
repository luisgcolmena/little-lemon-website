import { useState } from 'react'
import '../Styles/ContactForm.css'

function ContactForm ({formData, handleChange}) {

  const [nameError, setNameError] = useState({
    required: false,
    length: false,
  })

  const inputValidation = (state) => {

    if (state.required) {
      console.log('O estará entrando aqui?')
      return <p className='contact-error-text'>This field is required.</p>
    } else if (state.length) {
      console.log('Está entrando aqui?')
      return <p className='contact-error-text'>You must input a name between 3 and 25 characters.</p>
    }
  }

  return (
    <div className='contact-form'>
      <h1>Contact Information</h1>
      <p className='contact-form-description'>You will receive an email to notify you that your reservation has been successful, and we will contact you 15 minutes before the scheduled time to confirm the reservation.</p>

      <div className='contact-form-texts'>
        <div className='contact-form-item'>
          <label htmlFor='name'>Full Name</label>
          <input
            name='name'
            type='text'
            placeholder='Luis Gerardillo...'
            value={formData.name}
            className={nameError.required ? 'contact-form-inputs contact-input-error' :
              nameError.length ? 'contact-form-inputs contact-input-error' : 'contact-form-inputs'}
            onChange={handleChange}
            onBlur={(e) => {
              if (!e.target.value) {
                setNameError({...nameError, required: true})
              } else if (e.target.value) {
                setNameError({...nameError, required: false})
                if (e.target.value.length < 3 || e.target.value.length > 25) {
                  console.log('Comprobando que entra aqui cuando sucede el error')
                  setNameError({...nameError, length: true})
                  } else {
                  console.log('Comprobando que entra aqui cuando ya no hay error')
                  setNameError({...nameError, length: false})
                  }
                }
              }
            }
          />
        {
          inputValidation(nameError)
        }
        </div>

        <div className='contact-form-item'>
        <label>Email</label>
        <input
          name='email'
          type='email'
          placeholder='email@gmail.com'
          /* className={requiredError ? 'contact-form-inputs contact-input-error' : 'contact-form-inputs'} */
          value={formData.email}
          onChange={handleChange}
          /* onBlur={(e) => {
            if (!e.target.value) {
              setRequiredError(true)
            } else if (e.target.value) {
              setRequiredError(false)
            }
          }} */
          required
        />
        {/* {
          requiredError &&
          <p className='contact-error-text'>This field is required.</p>
        } */}
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