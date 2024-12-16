export function checkIsDisabled(states, errors) {
  //Copiando el objeto que contiene los estados y removiendo los que no son required
  const {notes, ...statesValues} = states
  const errorsValues = Object.values(errors)
  const requiredStates = Object.values(statesValues)

  let isThereErrors
  let isThereValues

  //Chequear si existen errores (array de values de errores lleno de '')
  if (errorsValues.length === 0) {
    //Estado inicial de la página
    isThereErrors = true /* 'Estado inicial de la página, no hay errores' */
  } else {
    isThereErrors = Object.values(errors).every((item) => item === '')
      ? false /* 'Ya no hay errores' */
      : true /* 'Todavía hay algún error' */
  }
  console.log(`Checking for errors: ${isThereErrors}`)

  isThereValues = requiredStates.every((state) => state !== '')
    ? true /* 'Todos los estados tienen contenido' */
    : false /* 'Por lo menos uno está vacío' */
  console.log(`Checking states: ${isThereValues}`)

  return (
    (isThereErrors === true) && (isThereValues=== false) ? true : false
  )
}

export default checkIsDisabled