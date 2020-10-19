import React, { FunctionComponent, memo, useEffect, useState } from 'react'
import './CartSummary.css'

import { CartItem } from '../react-app-env'

interface CartSummaryProps {
  cartContent: Array<CartItem>,
}

const CartSummary: FunctionComponent<CartSummaryProps> = function CartSummary({ cartContent }) {
  const [totalQuantity, setTotalQuantity] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  useEffect(() => {
    if ( cartContent.length > 0 ) {
      setTotalQuantity(cartContent.map((cartItem) => cartItem.quantity).reduce((sum, current) => sum + current))
      setTotalPrice(cartContent.map((cartItem) => cartItem.price * cartItem.quantity).reduce((sum, current) => sum + current))
    }
  }, [cartContent])

  return (
    <div id="CartSummary">
      <div>Total Quantity: {totalQuantity}</div>
      <div>Total Price: {totalPrice}</div>
    </div>
  )
}

export default memo(CartSummary)
