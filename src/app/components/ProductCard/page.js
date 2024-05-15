import React from 'react';
import Link from 'next/link';
import { formatAmount } from '@/app/utils/Stripe';

const ProductCard = ({ item }) => {
  if (!item || !item.id || !item.images) {
    return null; // or render a placeholder/error message
  }

  return (
    <div className='flex justify-between'>
      <Link href={`../../Product/${item.id}`} className="mr-4">
        <div className="sm:w-64 w-full h-auto border rounded-lg overflow-hidden bg-white cursor-pointer hover:shadow-lg">
          <img src={item.images[0]} className='w-full h-40' alt={`product ${item.id}`} />
          <div className=" my-4 mx-12 grid gap-4 grid-col-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            <div>
              <h1 className="font-bold mr-7">{item.name}</h1>
              <p className="w-40 truncate">{item.description}</p>
            </div>
            <div className="text-green-500 ml-7 py-4 px-9 font-bold">
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
