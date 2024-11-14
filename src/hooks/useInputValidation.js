import { useState } from "react";

const validateFunc = (name, value) => {

  /* if (value) return */

  if (name === 'name') {
    return value.trim() === '' ? 'Error de name' : 'Name: boop'
  }

  if (name === 'notes') {
    return value ? 'Boop' : 'Error de notas'
  }

}

function useInputValidation() {

  const [error, setError] = useState(null)
  /* const [lengthError, setLengthError] = useState(null) */

  const handleBlur = (e) => {
    const [name, value] = e.target
    const newError = validateFunc(name, value)
    setError(newError)
  }

  /* const handleLength = (value) => {
    const newError = validateFunc(value)
    setLengthError(newError)
  } */

  return {
    error,
    handleBlur
  }
}

export default useInputValidation