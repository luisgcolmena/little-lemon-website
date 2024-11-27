import { useState } from "react";

const validateFunc = (name, value) => {

  if (name === 'notes') return ''

  if (!value.trim()) return 'Obligatorio hermanazo'

  if (name === 'name') {
    if (value.length < 3) return 'Error de poquilla longitud hermanaze'
    if (value.length > 25) return 'Error de muchilla longitud hermanazo'
  }

  if (name === 'notes') {
    console.log('Error de notillas')
    return value ? 'Boop' : 'Error de notas'
  }
  return ''
}

function useInputValidation() {

  const [errors, setError] = useState('')

  const handleBlur = (e) => {
    const {name, value} = e.target
    const newError = validateFunc(name, value)
    setError(newError || '')
    }

  return {
    errors,
    handleBlur
  }
}

export default useInputValidation