import { Product } from '../react-app-env'

export function splitStringIntoProducts(value: string): Array<Product> | undefined {
  const array = value.split(',')
  if ( array && array.length > 0 && array.length % 2 === 0) {
    const helper = []
    for ( let i = 0; i < array.length; i += 2 ) {
      const value = Number(array[i + 1].trim())
      if ( ! isNaN(value) && value > 0 ) {
        helper.push({ name: array[i].trim(), price: value })
      } else {
        return undefined
      }
    }
    return helper
  } else {
    return undefined
  }
}
