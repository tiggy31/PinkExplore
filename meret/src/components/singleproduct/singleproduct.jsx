import React,{useContext,useEffect, useState} from 'react'
import {ProductContext} from '../../context/product_context'
import './singleproduct.style.scss'
import Layout from '../Layout/Layout'
import {withRouter} from 'react-router-dom'
import { CartContext } from '../../context/cartcontext';
import { isInCart } from '../helpers'

const SingleProduct = ({history,match}) => {
      const  {products} = useContext(ProductContext)
      const {addProduct, cartItems, increase} = useContext(CartContext)
      const {id} = match.params
     const [single,setSingle] = useState(null)
     const itemInCart = isInCart(single,cartItems)
      useEffect(()=> {
          const product = products.find((item => Number(item.id) === Number(id)))
            if(!product){
                return history.push('/shop')
            }

            setSingle(product)
            
      },[single,id,history,products])
     

     if(!single){
         return null
     }
     const {imageUrl,title,price,description} = single
     console.log(single,"single")
    return (
        <Layout>
            <div className="single-product-container">
                <div className="product-image">
                    <img src={imageUrl} alt='product'/>
                </div>
                <div className="product-details">
                    <div className="name-price">
                    <h3>{title}</h3>
                    <p>{price}</p>
                    </div>
                    
                </div>
                <div className="add-to-cart-btns">
                    {
                        !itemInCart && 
                        <button className="button is-white nomad-btn" id="btn-white-outline"
                                onClick = {() => addProduct(single)}>
                        ADD TO CART
                    </button>
                    }
                    
                    {
                        itemInCart && 
                        <button className="button is-white nomad-btn" id="btn-white-outline"
                                onClick = {() => increase(single)}>
                        ADD MORE
                    </button>
                    }

                    <button className="button is-black nomad-btn" id = "btn-white-outline">
                        PROCEED TO CHECKOUT
                    </button>
                    <div clasName="product-description">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default withRouter(SingleProduct)