import './ContactForm.css'
import Input from '../../Input/Input'
import ContactInput from './ContactInput'
import getInputConfig from '../../../utils/getInputConfig'

function ContactForm ({formStates, errors, handleBlur}) {

  const { formValues, formSetValues } = formStates
  const nameConfig = getInputConfig('name')
  const emailConfig = getInputConfig('email')
  const phoneConfig = getInputConfig('phoneNumber')
  const notesConfig = getInputConfig('notes')

  return (
    <div className='contact-form'>
      <h1>Contact Information</h1>
      <p>You will receive an email to notify you that your reservation has been successful, and we will contact you 15 minutes before the scheduled time to confirm the reservation.</p>

      <div className='contact-form-divs'>
        <ContactInput label={'Full name'} id={'name'} error={errors['name']}>
          <Input
            inputConfig={nameConfig}
            state={{inputState: formValues['name'],setState: formSetValues['name']}}
            error={errors['name']}
            handleBlur={handleBlur}
          />
        </ContactInput>

        <ContactInput label={'Email'} id={'email'} error={errors['email']}>
          <Input
            inputConfig={emailConfig}
            state={{inputState: formValues['email'],setState: formSetValues['email']}}
            error={errors['email']}
            handleBlur={handleBlur}
          />
        </ContactInput>

        <ContactInput label={'Phone number'} id={'phoneNumber'} error={errors['phoneNumber']}>
          <Input
            inputConfig={phoneConfig}
            state={{inputState: formValues['phoneNumber'],setState: formSetValues['phoneNumber']}}
            error={errors['phoneNumber']}
            handleBlur={handleBlur}
          />
        </ContactInput>
      </div>

      <ContactInput label={'Additional notes'} id={'notes'} error={errors['notes']}>
        <Input
        inputConfig={notesConfig}
        state={{inputState: formValues['notes'],setState: formSetValues['notes']}}
        error={errors['notes']}
        handleBlur={handleBlur}
        />
      </ContactInput>
    </div>
  )
}

export default ContactForm