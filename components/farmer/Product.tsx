"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';

const Product = ({ img, name, price, rating } : { img: string, name: string, price: number, rating: number }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-3 bg-white p-3 rounded-xl'>
      <Image src={img} width={300} height={300} alt="product image" className='rounded-xl' />
      <div className='flex items-center gap-2'>
        <div className=''>
          <p className='text-2xl font-bold'>{name}</p>
          <p className='text-xl text-blue-500 font-medium'>Ksh {price}</p>
        </div>
        <div>
          <Heart onClick={() => setIsFavorite(!isFavorite)} className={`cursor-pointer mb-6 ${isFavorite && "text-red-500 fill-red-600"}`} />
        </div>
      </div>
      <div className='flex gap-1'>
        {Array.from({ length: rating }, (_, index) => (
          <Star key={index} className='cursor-pointer' />
        ))}
      </div>
    </div>
  );
}

export default Product;
