export const getInputClass = ({inputConfig, error}) => {

  /* console.log(errors[inputConfig.name]) */
  if (!error) {
    return inputConfig.styles
  } else if ( error !== '') {
    return `${inputConfig.styles} input-error`
  } else {
    return inputConfig.styles
  }

}

export default getInputClass