import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import React from 'react'

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        <Button buttonType={'inverted'}>Go to checkout</Button>
      </div>
    </div>
  )
}

export default CartDropdown