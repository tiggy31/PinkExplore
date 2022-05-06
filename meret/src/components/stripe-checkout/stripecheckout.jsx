import React,{useState,useContext} from 'react'
import { CartContext } from '../../context/cartcontext'
import {useStripe} from '@stripe/react-stripe-js'
import { fetchFromAPI } from '../helpers'

const StripeCheckout = () => {
    const [email, setEmail] = useState('');
    const { cartItems } = useContext(CartContext);
    const stripe = useStripe();
    const handleGuestCheckout = async (e) => {
      e.preventDefault();
      const line_items = cartItems.map(item => {
        return {
          quantity: item.quantity,
          price_data: {
            currency: 'usd',
            unit_amount: item.price * 100, // amount is in cents
            product_data: {
              name: item.title,
              description: item.description,
              images: [item.imageUrl], 
            }
          }
        }
      });
  
      const response = await fetchFromAPI('checkoutsession', {
        body: { line_items, customer_email: email },
      });
      
      const { sessionId } = response;
      console.log(sessionId,1)
      const { error } =  stripe.redirectToCheckout({
        sessionId
      });

      if (error) {
        console.log(error);
      }
    }
return(
    <form onSubmit={handleGuestCheckout}>
  <div>
      <input 
         type="email"
         onChange = {e => setEmail(e.target.value)}
         placeholder="email"
         value={email}
         className="nomad-input" />
  </div>
  <div className="submit-btn">
      <button type="submit" className="button is-black nomad-btn submit">
          Checkout
      </button>
  </div>
    </form>
)

}


export default StripeCheckout