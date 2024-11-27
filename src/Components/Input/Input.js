import './Input.css'
import useInputValidation from '../../hooks/useInputValidation'
import { memo } from 'react'

const Input = memo(function Input({wrapper,children,inputConfig,handleChange,dispatch}) {

  const {errors, handleBlur} = useInputValidation()


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
    value: inputConfig.state,
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

  let inputElement = {}
  switch(inputConfig.tag) {
    case 'input':
      inputElement =  (<input {...baseAtt}{...additionalAtt}></input>
      )
      break

    case 'select':
      inputElement = (<select {...baseAtt} {...additionalAtt}>
          {
            inputConfig.options.map((option,index) => {
              return (
                <option key={index} value={option}>{ option }</option>
              )})
          }
        </select>
      )
      break

    case 'textarea':
      inputElement = (<textarea {...baseAtt} {...additionalAtt}></textarea>)
      break

    default:
      break
  }

  /* console.log(`Renderizado del input: ${inputConfig.name}. Tiene un error: ${errors}`) */

  return wrapper ? (
    <>
      <div className={ inputClass(inputConfig.name) }>
          <label htmlFor={inputConfig.id}>
            <h4>{ children }</h4>
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
          <h4>{ children }</h4>
        </label>
        { inputElement }
        {
        errors &&
        <p className='error-text'>{ errors }</p>
        }
    </div>
  )

})

export default Input