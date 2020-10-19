import React, { FunctionComponent, memo } from 'react'
import './CartContent.css'

import { CartItem } from '../react-app-env'

interface CartContentProps {
  cartContent: Array<CartItem>,
  deleteItem: (index: number) => void
}

const CartContent: FunctionComponent<CartContentProps> = function CartContent({ cartContent, deleteItem }) {
  return (
    <div id="CartContent">
      <div className="row">
        <div>Name</div>
        <div>Quantity</div>
        <div>Unit Price</div>
        <div>Sub total</div>
        <div>Actions</div>
      </div>
      { cartContent.map((cartItem, index) => {
        return (
          <div key={index} className="row">
            <div>{cartItem.name}</div>
            <div>{cartItem.quantity}</div>
            <div>{cartItem.price}</div>
            <div>{cartItem.quantity * cartItem.price}</div>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        )
      }) }
    </div>
  )
}

export default memo(CartContent)
