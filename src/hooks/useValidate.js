import { useState } from "react";
import { validate } from "../utils/validate";

export function useValidate () {

  const [error, setError] = useState()

  const handleBlur = (e) => {
    const [name, value] = e.target
    const newError = validate(name,value)
    setError(newError)
  }

  return {
    handleBlur,
    error
  }
}


export default useValidate