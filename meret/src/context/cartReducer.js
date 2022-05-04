const sumItems = (cartItems) => {
    return{
        itemCount: cartItems.reduce((total,product) =>total + product.quantity ,0 ),
        total: cartItems.reduce((total,product) => total+(product.quantity * product.price), 0)
    }
}

const CartReducer = (state,action) => {
  
      switch(action.type){
       
          case 'ADD_ITEM':
             if(!state.cartItems.find(item => item.id === action.payload.id)){
                 state.cartItems.push({
                     ...action.payload,
                     quantity: 1
                     
                 })
                }
                
                 return {
                     ...state,
                     cartItems: [...state.cartItems],
                     ...sumItems(state.cartItems)
                 }
                 case 'INCREASE':
                    const index = state.cartItems.findIndex(item => item.id === action.payload.id)
                                  state.cartItems[index].quantity++
                        
              return {
                ...state,
                cartItems: [...state.cartItems],
                ...sumItems(state.cartItems),
              }
             
              case 'DECREASE':
                  const decrease = state.cartItems.findIndex(item => item.id === action.payload.id)
                           const product = state.cartItems[decrease]
                    if(product.quantity > 1){
                        product.quantity--
                    }
                  return{
                     ...state,
                     cartItems: [...state.cartItems],
                     ...sumItems(state.cartItems)
                  }
                
          default: 
          return state
      }
   
   
}
export default CartReducer
