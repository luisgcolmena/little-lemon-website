import './Input.css'
import  getInputElement  from '../../utils/getInputElement'
import getInputClass from '../../utils/getInputClass'

function Input({wrapper,inputConfig,dispatch, error, handleBlur}) {


  console.log(error)

  const handleChange = (e) => {
    inputConfig.setState(e.target.value)
  }

  const reducerOnChange = (e) => {
    if (inputConfig.type === 'date') {
      handleChange(e)
      dispatch(e.target.value)
    } else {
      handleChange(e)
    }
  }

  const inputClass = getInputClass({inputConfig, error})
  /* console.log(inputClass) */
  //Variable creada para asignar las propiedades base de cada tipo de input.
  const baseAtt ={
    type: inputConfig.type,
    name: inputConfig.name,
    id: inputConfig.id,
    value: inputConfig.state,
    className: !wrapper ? inputClass : '',
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
  const inputElement = getInputElement({inputConfig, baseAtt, additionalAtt})

  return wrapper ? (
    <>
      <div className={ inputClass }>
          <label htmlFor={inputConfig.id}>
            <h4>{ inputConfig.label }</h4>
          </label>
          {inputElement}
      </div>
      {
        error &&
        <p className='error-text'>{ error }</p>
      }
    </>
  ) : (
    <div className={ inputConfig.styles }>
        <label htmlFor={inputConfig.id}>
          <h4>{ inputConfig.label }</h4>
        </label>
        { inputElement }
        {
        error &&
        <p className='error-text'>{ error }</p>
        }
    </div>
  )
}

export default Input