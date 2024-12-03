export const getInputElement = ({inputConfig, errors, handleBlur }) => {
  
  const inputClass = (name) => {
    if (Object.keys(errors).length === 0) {

      return inputConfig.styles
    } else if ( errors[name] === '') {

      return inputConfig.styles
    } else {
      return `${inputConfig.styles} input-error`
    }
  }

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

    return inputElement
}