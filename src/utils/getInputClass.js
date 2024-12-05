export const getInputClass = ({inputConfig, errors}) => {

  console.log(errors[inputConfig.name])
  if (Object.keys(errors).length === 0) {
    return inputConfig.styles
  } else if ( errors[inputConfig.name] !== '') {
    return `${inputConfig.styles} input-error`
  } else {
    return inputConfig.styles
  }

}

export default getInputClass