import React,{useContext} from 'react'
import cartImage from '../assets/carts.png'
import './cart-icon.style.scss'
import {CartContext} from '../../context/cartcontext'
import {withRouter} from 'react-router-dom'

const CartIcon = ({history}) => {
  const {itemCount,cartItems} = useContext(CartContext)
 
  return (
      <div className="cart-container"
        onClick ={()=> history.push('/cart')} >
          <img src={cartImage} alt="cartPhoto"/>
          {itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null}

      </div>
  )
}

export default withRouter(CartIcon)