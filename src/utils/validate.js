export function validate(name, value) {
  let error = ''

  if (name === 'name') {
    error = '25 max' ? value.length > 25 :
      '3 min' ? value.length < 3 : ''

    return error
  }

  if (name === 'date') {
    error = 'Pick a date' ? value !== 0 : ''

    return error
  }
}