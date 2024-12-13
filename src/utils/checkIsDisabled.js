export function checkIsDisabled(states, errors) {
  const {notes, ...statesValues} = states
  const errorsValues = Object.values(errors)
  const requiredStates = Object.values(statesValues)

  let checkErrors
  let checkValues

  //Chequear si existen errores (array de values de errores lleno de '')
  if (errorsValues.length === 0) {
    checkErrors = false
  } else {
    checkErrors = Object.values(errors).every((item) => item === '') ? true : true
  }

  if (requiredStates.every((state) => state !== '')) {
    checkValues = 'Todos los estados tienen contenido'
  } else {
    checkValues = 'Por lo menos uno está vacío'
  }
  checkValues = requiredStates.every((state) => {
    return state !== ''
  }) ? 'Todos los estados tienen contenido' : 'Por lo menos uno está vacío'
  /* console.log(errorsValues) */
  console.log(`Checking states: ${checkValues}`)
  return (
    { checkErrors, checkValues }
  )
}

export default checkIsDisabled