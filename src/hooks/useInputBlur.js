import { useState } from "react";

function useInputBlur(validateFunc) {

  const [requiredError, setRequiredError] = useState(null)

  const handleBlur = (value) => {
    const newError = validateFunc(value)
    setRequiredError(newError)
  }

  return {
    requiredError,
    handleBlur
  }
}

export default useInputBlur