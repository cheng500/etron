import React, {
  Dispatch, ChangeEvent, FunctionComponent, SetStateAction,
  memo, useEffect, useState
} from 'react'

import { Product } from '../react-app-env'

import { splitStringIntoProducts } from '../util/helpers'

import './ShopInput.css'

interface ShopInputProps {
  setShopArray: Dispatch<SetStateAction<Array<Product>>>
}

const ShopInput: FunctionComponent<ShopInputProps> = function ShopInput({ setShopArray }) {
  const [shopList, setShopList] = useState<string>('Apple, 1, Orange, 2')
  const [error, setError] = useState<string | undefined>(undefined)

  useEffect(() => {
    const result = splitStringIntoProducts(shopList)
    if ( result ) {
      setShopArray(result)
      setError(undefined)
    } else {
      setError('Invalid Input')
    }
  }, [shopList, setShopArray])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setShopList(event.currentTarget.value)

  return (
    <div id="ShopInput">
      <input
        placeholder="(apple, 4, bananas, 4.5)"
        value={shopList}
        className={error ? 'input error' : 'input'}
        onChange={handleChange}
      />
      { error && <div className="error">{error}</div> }
    </div>
  )
}

export default memo(ShopInput)
