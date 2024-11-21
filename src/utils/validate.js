export const validateFunc = (name, value) => {

  if (name === 'notes') return ''

  if (!value.trim()) return 'Obligatorio hermanazo'

  if (name === 'name') {
    if (value < 3) return 'Error de poquilla longitud hermanazo '
    if (value > 25) return 'Error de muchilla longitud hermanazo'
  }

  if (name === 'notes') {
    return value ? 'Boop' : 'Error de notas'
  }

  return ''
}