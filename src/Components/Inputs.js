import { useState } from "react"

function Input({inputType, state, handleChange, dispatch}) {

  const [errors, setErrors] = useState({
    dateError: false,
  })

  if (inputType) {

  }

  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrors({
        ...errors,
        dateError: true
      })
    } else if (e.target.value) {
      setErrors({
        ...errors,
        dateError: false
      })
    }
  }

  return (
    <div className="div-input">
      <label htmlFor={inputType}><h3>{`${inputType.charAt(0).toUpperCase()}${inputType.slice(1).toLowerCase()}:`}</h3></label>
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
        >
      </input>
    </div>
  )
}

export default Input