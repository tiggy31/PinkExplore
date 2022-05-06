export const isInCart = (product,cartItems) => {
    return cartItems.find(item => item.id === product.id)
}

//function to make request to create session to backend

const API = "http://localhost:8080"

export async function fetchFromAPI(endpoint,options){
    const {method,body} = {method: 'POST', body: null, ...options};
    const res = await fetch(`${API}/${endpoint}`, {
        method,
        ...(body && {body: JSON.stringify(body)}),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return res.json()
}