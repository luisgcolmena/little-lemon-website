import { useState } from "react";

function useInputValidation () {

  const [error, setError] = useState(false)

  if (error) {
    return alert('Boop!')
  }
}
export default useInputValidation