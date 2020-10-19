import React, { FunctionComponent, useCallback, useState } from 'react'
import './App.css'

import { CartItem, Product } from './react-app-env'

import CartContent from './components/CartContent'
import CartSummary from './components/CartSummary'
import ShopButtons from './components/ShopButtons'
import ShopInput from './components/ShopInput'

interface AppProps {
}

const App: FunctionComponent<AppProps> = function App() {
  const [shopArray, setShopArray] = useState<Array<Product>>([])
  const [cartContent, setCartContent] = useState<Array<CartItem>>([])

  const addToCart = useCallback((item: Product): void => {
    const index = cartContent.findIndex((cartItem) => cartItem.name === item.name && cartItem.price === item.price)
    if ( index >= 0 ) {
      const helper = [...cartContent]
      helper[index] = { ...helper[index], quantity: helper[index].quantity + 1}
      setCartContent(helper)
    } else {
      setCartContent([...cartContent, { ...item, quantity: 1 }])
    }
  }, [cartContent])

  const deleteItem = useCallback((index: number): void => {
    if ( index !== -1 ) {
      setCartContent(cartContent.filter((el, i) => index !== i))
    }
  }, [cartContent])

  return (
    <div id="Container">
      { cartContent.length > 0
        ? <div>
            <CartContent cartContent={cartContent} deleteItem={deleteItem} />
            <CartSummary cartContent={cartContent} />
          </div>
        : <div>Cart is empty</div>
      }
      <div>
        <ShopInput setShopArray={setShopArray} />
        <ShopButtons shopArray={shopArray} addToCart={addToCart} />
      </div>
    </div>
  )
}

export default App
