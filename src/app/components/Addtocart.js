"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Addtocart = () => {
  const handleSubmit=()=>{
     toast.success("Item added to Cart")
  }
  return (
    <div>
        <button  onClick={handleSubmit}className='w-full mt-4 p-2 px-6 bg-purple-900 text-white rounded-md hover:bg-green-600'>
            Add To Cart
        </button>
        <Toaster/>
    </div>
  )
}

export default Addtocart