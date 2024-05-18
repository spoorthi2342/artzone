import React from 'react';
import Link from 'next/link';
import { formatAmount } from '@/app/utils/Stripe';
import Image from 'next/image';

const ProductCard = ({ item,index }) => {
  if (!item || !item.id || !item.images) {
    return null; // or render a placeholder/error message
  }

  return (
    <div className='flex justify-between'>
      <Link  href={`../../Product/${item.id}`} className="mr-4">
        <div className="w-64 h-96 border rounded-lg overflow-hidden bg-white cursor-pointer hover:shadow-lg">
          <Image 
          priority={index==0}
            src={item.images[0]} 
            height={220}
            width={270}
            alt={`product ${item.id}`} 
          />
          <div className="my-4 mx-5 grid gap-4 grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col justify-between">
              <h1 className="font-bold">{item.name}</h1>
              <p className="w-40 truncate">{item.description}</p>
            </div>
            <div className="text-green-500 py-4 p-14 font-bold">
              {formatAmount(item.default_price.unit_amount)} 
            </div>
          </div>
        </div>
      </Link>
      {/* Add similar checks for other product links */}
    </div>
  );
}

export default ProductCard;
