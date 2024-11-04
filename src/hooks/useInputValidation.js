import { useState } from "react";

function useInputValidation () { 

  const [error, setError] = useState(true)

  if (error) {
    return alert('Boop!')
  }
}
export default useInputValidation