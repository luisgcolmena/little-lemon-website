import { useState } from "react";

function useInputValidation(validateFunc) {

  const [requiredError, setRequiredError] = useState(null)
  const [lengthError, setLengthError] = useState(null)

  const handleBlur = (value) => {
    const newError = validateFunc(value)
    setRequiredError(newError)
  }

  const handleLength = (value) => {
    const newError = validateFunc(value)
    setLengthError(newError)
  }

  return {
    requiredError,
    lengthError,
    handleBlur,
    handleLength
  }
}

export default useInputValidation