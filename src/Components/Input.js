import '../Styles/Input.css'
import { useState } from "react"

function Input({children,inputConfig,handleChange,dispatch}) {

  const [errors, setErrors] = useState({
    date: false,
    name: false,
    email: false
  })

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


/*   (e) => {
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
        errors[inputConfig.name] ? `${inputConfig.styles} input-error` : `${inputConfig.styles}`}>
        {/* Label para todo tipo de Input */}
        <label htmlFor={inputConfig.id}>
          <h4>{/* {`${inputConfig.name.charAt(0).toUpperCase()}${inputConfig.name.slice(1).toLowerCase()}`} */}{ children }</h4>
        </label>

        {/* Renderizado condicional para cada tipo de tag */}

        {/* Tag:INPUT */}
        {inputConfig.tag && inputConfig.tag==='input' &&
          <input
          type={inputConfig.type}
          name={inputConfig.name}
          id={inputConfig.id}
          placeholder={inputConfig.placeHolder}
          value={inputConfig.state}
          onChange={(e) => {
            if (inputConfig.type === 'date') {
              handleChange(e)
              dispatch(e.target.value)
            } else {
              handleChange(e)
            }
          }}
          onBlur={handleBlur}
          {...addiotnalAtt}
          >
        </input>}

        {/* Tag:SELECT */}
        {inputConfig.tag && inputConfig.tag==='select' &&
          <select
            name={inputConfig.name}
            id={inputConfig.id}
            placeholder={inputConfig.placeHolder}
            value={inputConfig.state}
            onChange={handleChange}
            onBlur={handleBlur}
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
          name={inputConfig.name}
          type={inputConfig.type}
          id={inputConfig.id}
          placeholder={inputConfig.placeHolder}
          value={inputConfig.state}
          onChange={handleChange}
          onBlur={handleBlur}
          {...addiotnalAtt}
          >
        </textarea>}
      </div>
      {
        errors[inputConfig.name] &&
        <p className='error-text'>You need to select a date.</p>
      }
    </>
  )
}

export default Input