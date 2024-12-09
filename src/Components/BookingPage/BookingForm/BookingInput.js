export function BookingInput({label,id,error,children}) {

  return (
    <>
      <div className={error ? `booking-input input-error` : 'booking-input'}>
        <label htmlFor={ id }>
          <h4>{ label }</h4>
        </label>
        { children }
      </div>
        {
        error &&
        <p className='error-text'>{ error }</p>
        }
    </>
  )
}

export default BookingInput