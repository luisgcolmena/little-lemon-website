import './Input.css'
import getInputElement  from '../../utils/getInputElement'

function Input({inputConfig,state,dispatch,error,handleBlur}) {

  const { inputState, setState} = state

  const handleChange = (e) => {
    const {name, value} = e.target
    if (name === 'date') {
      setState(value)
      dispatch(value)
    } else {
      setState(value)
    }
  }

  //Variable creada para asignar las propiedades base de cada tipo de input.
  const baseAtt ={
    name: inputConfig.name,
    type: inputConfig.type,
    id: inputConfig.id,
    value: inputState,
    placeholder: inputConfig.placeHolder,
    onChange: handleChange,
    onBlur: handleBlur
  }

  // Variable creada para asignar propiedades condicionales al input.
  let additionalAtt = {}
  if (inputConfig.type === 'date') {
    additionalAtt = {
      min: new Date().toISOString().split('T')[0]}
    } else if (inputConfig.type === 'number') {
      additionalAtt = {
        min: inputConfig.range[0],
        max: inputConfig.range[1]
    }
  }
  if (inputConfig.className) {
    additionalAtt= {
      className: error ? `${inputConfig.className} contact-input-error` : inputConfig.className
    }
  }

  //Definir el tipo de input a renderizar
  const inputElement = getInputElement({inputConfig, baseAtt, additionalAtt})

  return (
    <>
      { inputElement }
    </>
  )
}

export default Input