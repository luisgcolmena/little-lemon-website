export function checkIsDisabled(states, errors) {
  const errorsValues = Object.values(errors)
  const statesValues = Object.values(states)
  let checkErrors
  let checkValues

  //Chequear si existen errores (array de values de errores lleno de '')
  if (errorsValues.length === 0) {
    checkErrors = false
  } else {
    return Object.values(errors).every((item) => item === '') ? false : true
  }
  
  if (statesValues.every((state) => state !== '')) {
    checkValues = false
  } else {
    checkValues = true
  }
  console.log(errorsValues)
  console.log(checkValues)
  return (
    /* checkErrors || checkValues */ 
    { checkErrors, checkValues }
  )
}

export default checkIsDisabled