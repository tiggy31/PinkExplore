import React,{useContext,useState} from 'react'
import { CartContext } from '../../context/cartcontext';
import Layout from '../Layout/Layout'
import './checkout.style.scss'
// import StripeCheckout from '../stripe-checkout/stripecheckout' hosted
import ShippingAddress from './custom-checkout/shipping-address';
import CustomCheckout from '../checkout/custom-checkout/customCheckout'



const Checkout = () => {
       const {total, itemCount,cartItems} = useContext(CartContext)
       const [shipping,setShipping] = useState(null)
      const addressShown = {
        display: (shipping ? 'none': 'block')
      }

      const cardShown = {
        display: (shipping ? 'block' : 'none')
      }
    return(
        <Layout>
        <div className='checkout'>
          <h2>Checkout Summary</h2>
          <h3>{`Total Items: ${itemCount}`}</h3>
          <h4>{`Amount to Pay: $${total}`}</h4>
         <div style={addressShown}>
            <ShippingAddress setShipping={setShipping}/>
           </div>
           <div style={cardShown}>
              <CustomCheckout {...{shipping,cartItems}}/>
           </div>
        </div>
      </Layout>
    )
}


export default Checkout