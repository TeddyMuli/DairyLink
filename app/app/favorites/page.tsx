import Product from '@/components/farmer/Product';
import React from 'react';

const Page = () => {
  return (
    <div className='flex flex-col gap-3 text-black'>
      <p className='text-3xl font-bold'>Favorites</p>
      <div>
        <Product name='Dog Food' rating={5} img='/assets/images/dog.jpg' price={300} />
      </div>
    </div>
  );
}

export default Page;
