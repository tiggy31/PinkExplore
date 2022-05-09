import React,{useContext} from 'react'
import {withRouter} from 'react-router-dom'
import './main-section.style.scss'
import pants from '../assets/acne.webp'
import {ProductContext} from '../../context/product_context'

const MainSection = ({history}) => {

const {products} = useContext(ProductContext) 

   const product  = products.find(item => item.id === 2)

  
    

   return (
       <div className="main-section-container">
           <div className="main-section-middle">
               <div className="ms-m-image">
                 <img src={product.imageUrl} alt = "coat"/>
                   
              
               </div>
               <div className="ms-m-description">
                  <h2>RAGGED WEAR</h2>
                  <p>Alternative clothing</p>
                  <button className="button is-bulma" id="shop-now" onClick={()=> history.push('/product/2')}>
                       SHOP COAT
                  </button>
               </div>
           </div>

       </div>
   )
}
export default withRouter(MainSection)