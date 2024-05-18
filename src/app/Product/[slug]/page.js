import React from 'react';
import { CheckIcon, LinkIcon } from '@heroicons/react/24/solid';
import Addtocart from '@/app/components/Addtocart';
import { getProductById ,getProducts} from '@/app/Services/ProductService';
import { formatAmount } from '@/app/utils/Stripe';
import Image from 'next/image';
import { notFound } from 'next/navigation';
export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())
 
//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }
const products = await getProducts()
const slugs=products.data.map(item=>({slug:item.id}))
return slugs

}


export async function generatemetadata ({params: { slug }}){
  const product=await getProductById(slug)
  if(!product){
    notFound
  }
  return{
    title:`Art Zone | ${product.name}`

  }

}

const Page = async ({ params: { slug } }) => {
  // Fetch product data
  const product = await getProductById(slug);
  

  return (
    <div className='m-4 px-9'>
      <div className='flex justify-around items-center flex-wrap'>
        <div className='w-80 h-80 py-9'>
          <Image 
          src={product.images[0]}
          priority={true}
           alt={product.name}
           width={320} 
           height={320}/>
          <p className='mt-4 text-l px-0'>
            {product.description}
          </p>
        </div>
        <div className='flex-1 ml-2 max-w-md border rounded-md hover:bg-slate-200 shadow-lg p-6 bg-white'> 
          <h2 className='text-xl font-semibold'>{product.name}</h2>
          <div className='flex pt-2 gap-2'>
            <CheckIcon className='text-lime-500 w-5 h-5' />
            <span className='font-semibold'>In stock</span>
            {/* <ShareIcon className=''/> */}
            <button className='inline-block text-purple-900 py-0 font-bold hover:cursor-pointer hover:text-red-500'>
              <LinkIcon className='inline-block mr-2 text-lime-500 w-5 h-5' />
              Share Link
            </button>
          </div>
          <div className='mt-4 border-t pt-4'>
            <p className='text-gray-500'>Price</p>
            <p className='text-gray-500 font-semibold'> {formatAmount(product.default_price.unit_amount)}  </p>
          </div>
          <Addtocart />
        </div>
      </div>
    </div>
  );
};

export default Page;
// static site generation
