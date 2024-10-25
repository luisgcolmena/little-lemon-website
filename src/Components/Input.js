import '../Styles/Input.css'
import { useState } from "react"

function Input({inputType, state, handleChange, dispatch}) {

  const [errors, setErrors] = useState({
    date: false,
    name: false,
    email: false
  })

  // Variable creada para asignar propiedades condicionales al input.
  let addiotnalAtt = {}
  if (inputType === 'date') {
    addiotnalAtt = {
      min: new Date().toISOString().split('T')[0]
    }

  }

  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrors({
        ...errors,
        date: true
      })
    } else if (e.target.value) {
      setErrors({
        ...errors,
        date: false
      })
    }
  }


/*   (e) => {
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
    } */

  return (
    <>
      <div className={
        errors[inputType] ? 'div-input input-error' : 'div-input'}>
        <label htmlFor={inputType}>
          <h4>{`${inputType.charAt(0).toUpperCase()}${inputType.slice(1).toLowerCase()}`}</h4>
        </label>
        <input
          name={inputType}
          type={inputType}
          id={inputType}
          value={state}
          onChange={(e) => {
            if (inputType === 'date') {
              handleChange(e)
              dispatch(e.target.value)
            } else {
              handleChange(e)
            }
          }}
          onBlur={handleBlur}
          {...addiotnalAtt}
          >
        </input>
      </div>
      {
        errors[inputType] &&
        <p className='error-text'>You need to select a date.</p>
      }
    </>
  )
}

export default Input