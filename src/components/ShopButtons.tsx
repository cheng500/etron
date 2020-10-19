import React, { FunctionComponent, memo } from 'react'

import { Product } from '../react-app-env'

import './ShopButtons.css'

interface ShopButtonsProps {
  shopArray: Array<Product>,
  addToCart(item: Product): void
}

const ShopButtons: FunctionComponent<ShopButtonsProps> = function ShopButtons({ shopArray, addToCart }) {
  return (
    <div id="ShopButtons">
      { shopArray !== undefined && shopArray.map((item, index) => {
        return (
          <button
            key={index}
            className="button"
            onClick={() => addToCart(item)}
          >
            {`Add ${item.name}`}
          </button>
        )
      }) }
    </div>
  )
}

export default memo(ShopButtons)
