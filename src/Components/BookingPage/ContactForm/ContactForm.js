import Input from '../../Input/Input'
import './ContactForm.css'
import { memo } from 'react'

const ContactForm = memo(function ContactForm () {

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
            styles: 'contact-form-div',
            placeHolder: 'Luis Gerardo'
          }}
          wrapper={ false }
        >
          Full name
        </Input>

        <Input
          inputConfig={{
            tag: 'input',
            type: 'email',
            name: 'email',
            id: 'email',
            styles: 'contact-form-div',
            placeHolder: 'example@email.com'
          }}
          wrapper={ false }
        >
          Email
        </Input>

        <Input
          inputConfig={{
            tag: 'input',
            type: 'number',
            name: 'phoneNumber',
            id: 'phoneNumber',
            range: [10**8,10**9],
            styles: 'contact-form-div',
            placeHolder: '9 7630 2016'
          }}
          wrapper={ false }
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
          styles: 'contact-form-div',
          placeHolder: 'Additional notes (Optional)'
        }}
        wrapper={ false }
      >
        Additional notes
      </Input>
    </div>
  )
})

export default ContactForm