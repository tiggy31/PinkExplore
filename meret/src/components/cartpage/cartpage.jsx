import React,{useContext} from 'react'
import {CartContext} from '../../context/cartcontext'
import CartItems from './cartItems'
import Layout from '../Layout/Layout'
import Total from './total'
const CartPage = () => {
  const {cartItems, itemCount,total,increase,decrease,remove,clear} = useContext(CartContext)
   return (   
      <Layout>
          <>
          <h1>Cart</h1>
          {
              cartItems.length === 0 ? <div className="empty-cart">Your cart is empty</div> :
              <>
                 <div className="cart-page">
                     <div className="cart-item-container">
                        {
                            cartItems.map(item => 
                                <CartItems {...item} key={item.id} increase={increase} decrease={decrease}remove={remove} clear={clear}/>)
                        }
                     </div>
                 </div>
                 <Total itemCount={itemCount} total={total} clear={clear}/>
              </>
          }
          </>
      </Layout>
   )
}

export default CartPage