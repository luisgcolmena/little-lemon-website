import { useState } from "react";

const validateFunc = (name, value) => {

  if (name === 'notes') return ''

  if (!value.trim()) return 'Field required'

  if (name === 'name') {
    if (value.length < 3) return 'This field requires at least 3 characters.'
    if (value.length > 25) return 'This field cannot exceed X characters.'
  }

  if (name === 'notes') {
    console.log('Error de notillas')
    return value ? 'Boop' : 'Error de notas'
  }
  return ''
}

function useInputValidation() {

  const [errors, setError] = useState({})

  const handleBlur = (e) => {
    const {name, value} = e.target
    const newError = validateFunc(name, value)
    setError((prevError) => ({...prevError, [name]: newError}))
    }

  return {
    errors,
    handleBlur
  }
}

export default useInputValidation