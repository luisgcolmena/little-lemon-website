import '../Styles/Input.css'
import useInputValidation from '../hooks/useInputValidation'

function Input({wrapper,children,inputConfig,handleChange,dispatch}) {

  const {errors, handleBlur} = useInputValidation()
  console.log(errors)

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
      console.log('No hay error')
      return inputConfig.styles
    } else if ( errors[name] === '') {
      console.log('Tampoco hay error')
      return inputConfig.styles
    } else {
      return `${inputConfig.styles} input-error`
    }

    /* return Object.keys(errors).length === 0 ?
      inputConfig.styles :
      `${inputConfig.styles} input-error` */
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

  return wrapper ? (
    <>
      <div className={ inputClass(inputConfig.name) }>
          <label htmlFor={inputConfig.id}>
            <h4>{ children }</h4>
          </label>
          {inputElement}
      </div>
      {
        errors[inputConfig.name] &&
        <p className='error-text'>{ errors[inputConfig.name] }</p>
      }
    </>
  ) : (
    <div className={ inputConfig.styles }>
        <label htmlFor={inputConfig.id}>
          <h4>{ children }</h4>
        </label>
        { inputElement }
        {
        errors[inputConfig.name] &&
        <p className='error-text'>{ errors[inputConfig.name] }</p>
        }
    </div>
  )
    {/* <>
      <div className={ inputConfig.styles}>

        {inputElement}

        {inputConfig.tag && inputConfig.tag==='input' &&
          <input
            {...baseAtt}
            className={ inputConfig.styles}
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

          
          {inputConfig.tag && inputConfig.tag==='textarea' &&
          <textarea
            className={inputConfig.styles}
            {...baseAtt}
            {...addiotnalAtt}
            >
          </textarea>}

          {
          error &&
          <p className='error-text'>{error}</p>
          }
      </div>
      {
        error &&
        <p className='error-text'>{error}</p>
      }
    </> */}
  
}

export default Input