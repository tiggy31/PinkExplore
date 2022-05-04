import React, {createContext,useReducer}from 'react'
import CartReducer,{sumItems} from './cartReducer'

const cartStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')):[]

export const CartContext = createContext()
const initialState = {
    cartItems: cartStorage,
    ...sumItems(cartStorage)
}


const CartContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(CartReducer,initialState)
   
   
const addProduct = (product) => dispatch({
    type: 'ADD_ITEM',
    payload: product
   
})

const increase = (product) => dispatch({
    type: 'INCREASE',
    payload: product
})

const decrease = (product) => dispatch({
    type: 'DECREASE',
    payload: product
})

const clear = () => dispatch({
    type: 'CLEAR'
})
const remove = (product) => dispatch({
    type: 'REMOVE',
    payload: product
})

const contextValues = {
    ...state,
    addProduct,
    increase,
    decrease,
    remove,
    clear
}

   return(<CartContext.Provider value={contextValues}>
      {children}
   </CartContext.Provider>
   )
}

export default CartContextProvider
