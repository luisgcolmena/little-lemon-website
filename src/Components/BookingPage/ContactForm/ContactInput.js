export function ContactInput({label,children,id,error}) {

  return (
    <div className={ 'contact-form-div' }>
      <label htmlFor={ id }>
        <h4>{ label }</h4>
      </label>
      <div className={error ? `contact-form-div input-error` : 'contact-form-div'}>
        { children }
      </div>
      { error &&
      <p className='error-text'>{ error }</p> }
      {console.log(error)}
    </div>
  )
}

export default ContactInput