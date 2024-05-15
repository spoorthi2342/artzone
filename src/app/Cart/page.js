import React from 'react'
import{MinusIcon, PlusIcon, TrashIcon, XCircleIcon} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import p1image from "../assets/Image/picture-abstract-art.jpg"

const page = () => {
    const cartCount=1
  return (
    <div className='p-7'>
        {cartCount>0?(
          <>
          <h2 className='text-4xl font-semibold'>Cart Items: {cartCount}</h2>
          <button className='text-purple-900 mt-2  font-bold hover:text-purple-300 hover:cursor-pointer'>
            clear All <TrashIcon className='inline-block w-4'/>
          </button>
          </>
        ):

        (
            <>
            <h2 className='text-4xl font-semibold px-8'>Your Cart is Empty !!</h2>
            <Link href="../Product" className='text-xl mt-1 text-purple-900 underline px-8'>Shop here </Link>
            </>
        )}
        {
          cartCount>0 && (
            <div>
            <div className='flex justify-between border-rounded-md p-4 my-2 bg-white hover:shadow-lg'>
              <Link href="../Product/p1" className=' flex items-center'>
                <Image
                src={p1image}
                alt='product 1'
                height={180}
                width={80}
                />
                <div className='font-semibold text-xl ml-2'>Acrylic Painting</div>
              </Link>
              <div className='flex items-center gap-5 '>
                <div className='flex items-center gap-3 '></div>
                <button className='p-1 rounded-md text-purple-900 hover:bg-purple-900 hover:text-white disabled:cursor-not-allowed'>
                  <MinusIcon className='w-6 h-6'/>
                </button>
                <p className='font-semibold text-xl'> 0</p>
                <button className='p-1 rounded-md text-purple-900 hover:bg-purple-900 hover:text-white disabled:cursor-not-allowed'>
                  <PlusIcon className='w-6 h-6'/>
                </button>
                <p>
                  x<span className='text-xl font-semibold'> 999</span>

                </p>
                <button className='text-purple-900 hover:text-red-600'>
                  <XCircleIcon className='w-6 h-6'/>
                </button>
                

              </div>
            </div>
            <div className='flex flex-col items-end border-t  py-4 mt-8'> 
            <p className='text-xl'> Total <span className='font-bold text-green-500'> 5000</span></p>
            <button className='w-30 mt-4 p-2 px-6 bg-purple-900 text-white rounded-md hover:bg-green-600'>
              checkout
            </button>
            </div>
            </div>
          )
        }
    </div>
   
  )
}

export default page