'use client'
import React from 'react'

 export const ProductCtx = createContent(null)

const Provider = ({children}) => {
    const [cartItems, setCartItems]=useState([])
  return (
   <ProductCtx.Provider value={{cartItems,setCartItems}}>
{children}
   </ProductCtx.Provider>
  )
}

export default Provider