import Input from "../../Input/Input"

export function BookingInput({label,inputConfig,states,error,handleBlur,dispatch}) {

  return (
    <>
      <div className={error ? `booking-input input-error` : 'booking-input'}>
        <label htmlFor={inputConfig.id}>
          <h4>{ label }</h4>
        </label>
        <Input
          inputConfig={inputConfig}
          state={states}
          error={error}
          handleBlur={handleBlur}
          dispatch={dispatch}
        />
      </div>
        {
        error &&
        <p className='error-text'>{ error }</p>
        }
    </>
  )
}

export default BookingInput