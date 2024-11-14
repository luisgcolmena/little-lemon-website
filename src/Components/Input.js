import '../Styles/Input.css'
import { useState } from "react"
import useInputValidation from '../hooks/useInputValidation'

//Funciones para realizar validaciones de los inputs
/* const validateRequired = (value) => {
  return value ? false : "This field is required."
}

const validateLength = (value) => {
  return (value.length > 25) || (value.length < 3) ? 'String between 3 and 25' : false
} */

function Input({children,inputConfig,handleChange,dispatch}) {

  const [error, handleBlur] = useInputValidation()

  //Variable creada para asignar las propiedades base de cada tipo de input.
  const baseAtt ={
    type: inputConfig.type,
    name: inputConfig.name,
    id: inputConfig.id,
    value: inputConfig.state,
    placeholder: inputConfig.placeHolder,
    onChange: handleChange,
    onBlur: handleBlur
  }

  // Variable creada para asignar propiedades condicionales al input.
  let addiotnalAtt = {}
  if (inputConfig.type === 'date') {
    addiotnalAtt = {
      min: new Date().toISOString().split('T')[0]}
    } else if (inputConfig.type === 'number') {
      addiotnalAtt = {
        min: inputConfig.range[0],
        max: inputConfig.range[1]
    }
  }

  return (
    <>
      <div className={ inputConfig.styles
        /* inputConfig.styles === 'booking-input' ?
        onBlurValidation.requiredError === null ? `${inputConfig.styles}`:
          onBlurValidation.requiredError === false ? `${inputConfig.styles}` : `${inputConfig.styles} input-error` : inputConfig.styles */
      }>

        {/* Label para todo tipo de Input */}
        <label htmlFor={inputConfig.id}>
          <h4>{ children }</h4>
        </label>

        {/* Renderizado condicional para cada tipo de tag */}

        {/* Tag:INPUT */}
        {inputConfig.tag && inputConfig.tag==='input' &&
          <input
            {...baseAtt}
            className={ inputConfig.styles
              /* inputConfig.styles === 'contact-form-div' ?
              onBlurValidation.requiredError === null ? `${inputConfig.styles}`:
                onBlurValidation.requiredError === false ? `${inputConfig.styles}` : `${inputConfig.styles} input-error` : null */}
            onChange={(e) => {
              if (inputConfig.type === 'date') {
                handleChange(e)
                dispatch(e.target.value)
              } else {
                handleChange(e)
              }
            }}
            {...addiotnalAtt}
          >
          </input>}

          {/* Tag:SELECT */}
          {inputConfig.tag && inputConfig.tag==='select' &&
          <select
          {...baseAtt}
          {...addiotnalAtt}
          /* className={classError()} */
          >
            {
              inputConfig.options.map((option,index) => {
                return (
                  <option key={index} value={option}>{ option }</option>
                )
              })
            }
          </select>}

          {/* Tag:TEXTAREA */}
          {inputConfig.tag && inputConfig.tag==='textarea' &&
          <textarea
            className={inputConfig.styles}
            {...baseAtt}
            {...addiotnalAtt}
            >
          </textarea>}

          {
          onBlurValidation.requiredError &&
          inputConfig.styles==='contact-form-div' &&
          !(inputConfig.name === 'notes') &&
          <p className='error-text'>{error}</p>
          }
      </div>
      {
        onBlurValidation.requiredError &&
        inputConfig.styles==='booking-input' &&
        !(inputConfig.name === 'notes') &&
        <p className='error-text'>{onBlurValidation.requiredError}</p>
      }
    </>
  )
}

export default Input