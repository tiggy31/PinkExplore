import React,{useContext} from 'react'
import './featured-product.style.scss'
import {isInCart} from '../helpers'
import { CartContext } from '../../context/cartcontext'
import {withRouter} from 'react-router-dom'

const FeaturedProduct = (props) => {
    const {title,price,imageUrl,id, description,history} = props
    const product  = {
        title,price,imageUrl,id, description
    }
    const {addProduct,cartItems,increase} = useContext(CartContext)
   const itemInCart = isInCart(product,cartItems)

    return (
        <div className="featured-product" >
            <div className="featured-image" onClick = {() => history.push(`/product/${id}`)}>
                <img src={imageUrl} alt='product'/>
            </div>
            <div className="name-price">
               <h3>{title}</h3>
               <p>${price}</p>
               {
                   !itemInCart &&

                   <button className="button is-black nomad-btn"
                           onClick={() => addProduct(product)}>ADD TO CART</button>
               }
                {
                   itemInCart &&

                   <button className="button is-black nomad-btn"
                            id = "btn-white-outline"
                           onClick={() => increase(product)}>ADD MORE</button>
               }
              
            </div>
        </div>
    )
}

export default withRouter(FeaturedProduct)