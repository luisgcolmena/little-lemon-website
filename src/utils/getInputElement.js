export const getInputElement = ({inputConfig, baseAtt, additionalAtt }) => {

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