import React,{useContext} from 'react'
import './featured-collection.style.scss'
import {ProductContext} from '../../context/product_context'
import FeaturedProduct from '../featured-product/featured-product'

const FeaturedCollection = () => {
    const {products} = useContext(ProductContext)

    const productItems = products.filter((product, i) => i < 4).map(product => (
        <FeaturedProduct {...product} key={product.id}/>
    ))
   
   return (
      <div className="featured-collection container">
          <h2 className="featured-section-title">FeaturedCollection</h2>
      <div className="products">
          {productItems}
      </div>
      </div>
   )
}

export default FeaturedCollection