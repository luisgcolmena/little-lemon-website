import '../Styles/Input.css'
import { useState } from "react"
import useInputBlur from '../hooks/useInputBlur'

//Funciones para realizar validaciones de los inputs
const validateRequired = (value) => {
  return value ? false : "This field is required???"
}

function Input({children,inputConfig,handleChange,dispatch}) {

  const [errors, setErrors] = useState({
    date: false,
    name: false,
    email: false
  })

  const onBlurValidation = useInputBlur(validateRequired)

  const handleBlur = (e) => {
    if (!e.target.value) {
      setErrors({
        ...errors,
        date: true
      })
    } else if (e.target.value) {
      setErrors({
        ...errors,
        date: false
      })
    }
  }

  //Variable creada para asignar las propiedades base de cada tipo de input.
  const baseAtt ={
    type: inputConfig.type,
    name: inputConfig.name,
    id: inputConfig.id,
    value: inputConfig.state,
    placeholder: inputConfig.placeHolder,
    onChange: handleChange,
    onBlur: () => onBlurValidation.handleBlur(inputConfig.state)
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


  /* const handleOnBLur = (e) => {
    if (!e.target.value) {
      setNameError({...nameError, required: true})
    } else if (e.target.value) {
      setNameError({...nameError, required: false})
      if (e.target.value.length < 3 || e.target.value.length > 25) {
        console.log('Comprobando que entra aqui cuando sucede el error')
        setNameError({...nameError, length: true})
        } else {
        console.log('Comprobando que entra aqui cuando ya no hay error')
        setNameError({...nameError, length: false})
        }
      }
    } */

  return (
    <>
      <div className={
        onBlurValidation.requiredError === false ?
        `${inputConfig.styles} input-error` :
        `${inputConfig.styles}`}>

        {/* Label para todo tipo de Input */}
        <label htmlFor={inputConfig.id}>
          <h4>{ children }</h4>
        </label>

        {/* Renderizado condicional para cada tipo de tag */}

        {/* Tag:INPUT */}
        {inputConfig.tag && inputConfig.tag==='input' &&
          <input
          {...baseAtt}
          onChange={(e) => {
            if (inputConfig.type === 'date') {
              handleChange(e)
              dispatch(e.target.value)
            } else {
              handleChange(e)
            }
          }}
          /* onBlur={() => onBlurValidation.handleBlur(inputConfig.state)} */
          {...addiotnalAtt}
          >
        </input>}

        {/* Tag:SELECT */}
        {inputConfig.tag && inputConfig.tag==='select' &&
          <select
            {...baseAtt}
            {...addiotnalAtt}
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
          {...baseAtt}
          {...addiotnalAtt}
          >
        </textarea>}
        {
        onBlurValidation.requiredError && inputConfig.styles==='contact-form-div' &&
        <p className='error-text'>{onBlurValidation.requiredError}</p>
      }
      </div>
      {
        onBlurValidation.requiredError && inputConfig.styles==='booking-input' &&
        <p className='error-text'>{onBlurValidation.requiredError}</p>
      }
    </>
  )
}

export default Input