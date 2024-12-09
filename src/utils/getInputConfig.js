export function getInputConfig(name,options) {

  let inputConfig = {}
  switch(name) {
    case 'date':
      inputConfig = {
        tag: 'input',
        type: 'date',
        name: 'date',
        id: 'date',
      }
      console.log('Entra en el date config')
      break
    case 'time':
      inputConfig = {
        tag: 'select',
        type: 'time',
        name: 'time',
        id: 'time',
        options: options,
      }
      break
    case 'guests':
      inputConfig = {
        tag: 'input',
        type: 'number',
        name: 'guests',
        id: 'guests',
        range: [1,10],
      }
      break
    case 'ocassion':
      inputConfig = {
        tag: 'select',
        name: 'ocassion',
        id: 'ocassion',
        options: ['Birthday','Anniversary','Engagement','Simple meal'],
      }
      break
    case 'name':
      inputConfig={
        tag: 'input',
        type: 'text',
        name: 'name',
        id: 'name',
      }
      break
    default:
      break
  }
  return inputConfig

  /* switch(name) {
    case 'date':
      return ({
        tag: 'input',
        type: 'date',
        name: 'date',
        id: 'date',
      })
    case 'time':
      return({
        tag: 'select',
        type: 'time',
        name: 'time',
        id: 'time',
        options: options,
      })
    case 'guests':
      return({
        tag: 'input',
        type: 'number',
        name: 'guests',
        id: 'guests',
        range: [1,10],
      })
    case 'ocassion':
      return({
        tag: 'select',
        name: 'ocassion',
        id: 'ocassion',
        options: ['Birthday','Anniversary','Engagement','Simple meal'],
      })
    default:
      break
  } */
}
export default getInputConfig