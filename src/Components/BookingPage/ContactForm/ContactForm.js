import Input from '../../Input/Input'
import './ContactForm.css'

function ContactForm ({formStates, errors, handleBlur}) {

  const { formValues, formSetValues } = formStates

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
            label: 'Full name',
            styles: 'contact-form-div',
            state: formValues.name,
            setState: formSetValues.name,
            placeHolder: 'Luis Gerardo'
          }}
          wrapper={ false }
          errors={errors}
          handleBlur={handleBlur}
        />

        <Input
          inputConfig={{
            tag: 'input',
            type: 'email',
            name: 'email',
            id: 'email',
            label: 'Email',
            styles: 'contact-form-div',
            state: formValues.email,
            setState: formSetValues.email,
            placeHolder: 'example@email.com'
          }}
          wrapper={ false }
          errors={errors}
          handleBlur={handleBlur}
        />

        <Input
          inputConfig={{
            tag: 'input',
            type: 'number',
            name: 'phoneNumber',
            id: 'phoneNumber',
            range: [10**8,10**9],
            label: 'Phone number',
            styles: 'contact-form-div',
            state: formValues.phoneNumber,
            setState: formSetValues.phoneNumber,
            placeHolder: '9 7630 2016'
          }}
          wrapper={ false }
          errors={errors}
          handleBlur={handleBlur}
        />
      </div>

      <Input
        inputConfig={{
          tag: 'textarea',
          type: 'text',
          name: 'notes',
          id: 'notes',
          label: 'Additional notes',
          styles: 'contact-form-div',
          state: formValues.notes,
          setState: formSetValues.notes,
          placeHolder: 'Additional notes (Optional)'
        }}
        wrapper={ false }
        errors={errors}
        handleBlur={handleBlur}
      />
    </div>
  )
}

export default ContactForm