import React from 'react'
import {withRouter} from 'react-router-dom'
import './main-section.style.scss'
import pants from '../assets/acne.webp'
const MainSection = ({history}) => {
   return (
       <div className="main-section-container">
           <div className="main-section-middle">
               <div className="ms-m-image">
                   <img src={pants} alt="pants"/>
               </div>
               <div className="ms-m-description">
                  <h2>RAGGED WEAR</h2>
                  <p>Alternative clothing</p>
                  <button className="button is-bulma" id="shop-now" onClick={()=> history.push('/product/1')}>
                       SHOP PANT
                  </button>
               </div>
           </div>

       </div>
   )
}
export default withRouter(MainSection)