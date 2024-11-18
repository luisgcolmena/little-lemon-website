import { useState } from "react";

const validateFunc = (name, value) => {

  if (name === 'notes') return ''

  if (!value.trim()) return 'Obligatorio hermanazo'

  if (name === 'name') {
    if (value < 3) return 'Error de poquilla longitud hermanazo '
    if (value > 25) return 'Error de muchilla longitud hermanazo'
  }

  if (name === 'notes') {
    return value ? 'Boop' : 'Error de notas'
  }

  return ''
}

function useInputValidation() {

  const [errors, setError] = useState({})

  const handleBlur = (e) => {
    const {name, value} = e.target
    const newError = validateFunc(name, value)
    setError((prevError) => {
      return (
        {...prevError,
          [name] : newError}
      )        
    }
  )
  }

  return {
    errors,
    handleBlur
  }
}

export default useInputValidation