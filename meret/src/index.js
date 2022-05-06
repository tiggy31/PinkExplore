import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import ProductContextProvider from './context/product_context';
import CartContextProvider from './context/cartcontext'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe("pk_test_51KizlxKTt6BLaqyjAmqaJ5yJul4jHmL1Uz8KZnbDiTaOz4GAzOW5PaOE0EdICxX2sTR8RgkHOS2zqkKbWyKY9Oi400N2TYP3ty")

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ProductContextProvider>
    <CartContextProvider>
      <Elements stripe={stripePromise}>
    <App />
    </Elements>
    </CartContextProvider>
  </ProductContextProvider>
  </BrowserRouter>
 
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
