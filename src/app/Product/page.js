import React from 'react'
import ProductCard from '../components/ProductCard/page'
import { getProducts } from '../Services/ProductService'

const product = async () => {
  const Product = await getProducts( 10)
  return (
    
      <div className='  my-4 mx-12   grid gap-4  grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {Product.data.map(item=> <ProductCard item={item}/>)}

         </div>
      
 
    
    
  )
}

export default product