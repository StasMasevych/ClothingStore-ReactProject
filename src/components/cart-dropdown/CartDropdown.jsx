import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from '../button/Button';
import CartItem from "../cart-item/CartItem";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";

import './CartDropdown.scss';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate()

  const goToCheckout = () => {
    navigate('/checkout')
  }

  return (
        <div className='cart-dropdown-container'>
          <div className='cart-items'>
           {
            cartItems.length ?  (cartItems.map((item) => (
              <CartItem key={item.id} cartItem={item}/>
            ))) : (
              <span style={{textAlign: 'center'}}>Your cart is empty</span>
            )
           }
          </div>
          <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </div>
      )

    }
 

export default CartDropdown