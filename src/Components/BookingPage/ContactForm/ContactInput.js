export function ContactInput({label,children,id,error}) {

  return (
    <div className={ 'contact-form-div' }>
      <label htmlFor={ id }>
        <h4>{ label }</h4>
      </label>
      { children }
      { error &&
      <p className='error-text'>{ error }</p> }
    </div>
  )
}

export default ContactInput