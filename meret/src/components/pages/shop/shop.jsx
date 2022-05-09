import React,{useContext} from 'react'
import Layout from '../../Layout/Layout'
import { ProductContext } from '../../../context/product_context';
import FeaturedProduct from '../../featured-product/featured-product'
import './shop.style.scss'

const Shop = () => {
   const {products} = useContext(ProductContext)
   const items = products.map(item => (
    <FeaturedProduct  {...item} key={item.key}/>
  
   ))

return (
    <Layout>
<div className="product-list-container">
     <h2 className="product-list-title">Shop</h2>
     <div className="product-list"> 

        {
            items
        }
     </div>
 </div>
    </Layout>
 
)
}

export default Shop