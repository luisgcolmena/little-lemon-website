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
        placeHolder: 'Luis Gerardo',
        className: 'contact-form-input'
      }
      break
    case 'email':
      inputConfig={
        tag: 'input',
        type: 'email',
        name: 'email',
        id: 'email',
        placeHolder: 'example@email.com',
        className: 'contact-form-input'
      }
      break
    case 'phoneNumber':
      inputConfig={
        tag: 'input',
        type: 'number',
        name: 'phoneNumber',
        id: 'phoneNumber',
        range: [10**8,10**9],
        placeHolder: '9 7630 2016',
        className: 'contact-form-input'
      }
      break
    case 'notes':
      inputConfig={
        tag: 'textarea',
        type: 'text',
        name: 'notes',
        id: 'notes',
        placeHolder: 'Additional notes (Optional)',
        className: 'contact-form-input'
      }
      break
    default:
      break
  }
  return inputConfig
}
export default getInputConfig