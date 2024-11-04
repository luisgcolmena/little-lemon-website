import '../Styles/ContactForm.css'
import Input from './Input'
import { useState } from 'react'


const inputValidation = (state) => {

  if (state.required) {
    console.log('O estará entrando aqui?')
    return <p className='contact-error-text'>This field is required.</p>
  } else if (state.length) {
    console.log('Está entrando aqui?')
    return <p className='contact-error-text'>You must input a name between 3 and 25 characters.</p>
  }
}

function ContactForm ({formData, handleChange}) {

  const [nameError, setNameError] = useState({
    required: false,
    length: false,
  })



  return (
    <div className='contact-form'>
      <h1>Contact Information</h1>
      <p>You will receive an email to notify you that your reservation has been successful, and we will contact you 15 minutes before the scheduled time to confirm the reservation.</p>

      <div className='contact-form-divs'>
        <Input
          inputConfig={{
            tag: 'input',
            type: 'text',
            name: 'name',
            id: 'name',
            state: formData.name,
            styles: 'contact-form-div',
            placeHolder: 'Luis Gerardo'
          }}
          handleChange={handleChange}
        >
          Full name
        </Input>

        <Input
          inputConfig={{
            tag: 'input',
            type: 'email',
            name: 'email',
            id: 'email',
            state: formData.email,
            styles: 'contact-form-div',
            placeHolder: 'example@email.com'
          }}
          handleChange={handleChange}
        >
          Email
        </Input>

        <Input
          inputConfig={{
            tag: 'input',
            type: 'number',
            name: 'phoneNumber',
            id: 'phoneNumber',
            state: formData.phoneNumber,
            range: [10**8,10**9],
            styles: 'contact-form-div'
          }}
          handleChange={handleChange}
        >
          Phone number
        </Input>
      </div>

      <Input
        inputConfig={{
          tag: 'textarea',
          type: 'text',
          name: 'notes',
          id: 'notes',
          state: formData.notes,
          styles: 'contact-form-div',
          placeHolder: 'Additional notes (Optional)'
        }}
        handleChange={handleChange}
      >
        Additional notes
      </Input>
    </div>
  )
}

export default ContactForm