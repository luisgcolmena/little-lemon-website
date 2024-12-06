import Input from "../../Input/Input";

export function ContactInput({label,inputConfig,states,error,handleBlur}) {

  return (
    <div className={ 'contact-form-div' }>
      <label htmlFor={inputConfig.id}>
        <h4>{ label }</h4>
      </label>
      <Input
        inputConfig={inputConfig}
        state={states}
        error={error}
        handleBlur={handleBlur}
      />
      {
      error &&
      <p className='error-text'>{ error }</p>
      }
    </div>
  )
}

export default ContactInput