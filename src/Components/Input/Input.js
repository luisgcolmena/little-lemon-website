import './Input.css'
import useInputValidation from '../../hooks/useInputValidation'
import { useFormContext } from '../BookingPage/FormContext/useFormContext'
import { getInputElement } from './InputElement/getInputElement'

function Input({wrapper,inputConfig,dispatch}) {

  const {errors, handleBlur} = useInputValidation()
  const {contextValues, contextSetValues} = useFormContext()

  console.log(contextValues[inputConfig.name])

  const handleChange = (e) => {
    const {name, value} = e.target
    contextSetValues[name](value)
  }

  const reducerOnChange = (e) => {
    if (inputConfig.type === 'date') {
      handleChange(e)
      dispatch(e.target.value)
    } else {
      handleChange(e)
    }
  }
  const inputClass = (name) => {
    if (Object.keys(errors).length === 0) {

      return inputConfig.styles
    } else if ( errors[name] === '') {

      return inputConfig.styles
    } else {
      return `${inputConfig.styles} input-error`
    }
  }

  //Variable creada para asignar las propiedades base de cada tipo de input.
  const baseAtt ={
    type: inputConfig.type,
    name: inputConfig.name,
    id: inputConfig.id,
    value: (contextValues[inputConfig.name] || ""),
    className: !wrapper ? inputClass(inputConfig.name) : '',
    placeholder: inputConfig.placeHolder,
    onChange: reducerOnChange,
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

  //Definir el tipo de input a renderizar

  const inputElement = getInputElement(inputConfig, errors, handleBlur)

  return wrapper ? (
    <>
      <div className={ inputClass(inputConfig.name) }>
          <label htmlFor={inputConfig.id}>
            <h4>{ inputConfig.label }</h4>
          </label>
          {inputElement}
      </div>
      {
        errors &&
        <p className='error-text'>{ errors }</p>
      }
    </>
  ) : (
    <div className={ inputConfig.styles }>
        <label htmlFor={inputConfig.id}>
          <h4>{ inputConfig.label }</h4>
        </label>
        { inputElement }
        {
        errors &&
        <p className='error-text'>{ errors }</p>
        }
    </div>
  )
}

export default Input