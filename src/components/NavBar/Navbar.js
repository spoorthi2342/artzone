import React from 'react';
import Link from 'next/link';
import {ShoppingCartIcon} from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <nav className="bg-purple-900 py-5 flex justify-between">
      <Link href="/">
        <span className='text-white px-6 font-bold text-xl  hover:text-purple-300 hover:cursor-pointer'>ArtZone</span>
      </Link>
      <Link href="/cart">
        <span className="text-white px-7 font-bold hover:text-purple-300 hover:cursor-pointer">
          <ShoppingCartIcon className="w-7 h-7 inline-block"/>Cart
        <span className="px-2 text-white font bold hover:text-purple-300 hover:cursor-pointer">(0)</span>
        </span>
       
      </Link>
    </nav>
  );
};

export default Navbar;
