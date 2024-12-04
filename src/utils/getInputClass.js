export const getInputClass = (inputConfig, errors) => {
  console.log('Error?')
  if (Object.keys(errors).length === 0) {
    console.log('O error aqui?')
    return inputConfig.styles
  } else if ( errors[inputConfig.name] === '') {
    return inputConfig.styles
  } else {
    return `${inputConfig.styles} input-error`
  }
}

export default getInputClass