import Product from '@/components/farmer/Product';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui';
import React from 'react';

const Page = () => {

  return (
    <div className='flex flex-col gap-3 text-black'>
      <p className='text-3xl font-bold'>Products</p>
        <div className='flex justify-center items-center bg-blue-500 text-white p-3 rounded-xl'>
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className=''>
                  <p>September 12-22</p>
                  <p className='font-bold text-3xl'>Enjoy free home delivery in this summer</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className=''>
                  <p>September 14-22</p>
                  <p className='font-bold text-3xl'>Enjoy free home delivery in this summer</p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className='p-3 my-3 rounded-lg bg-orange-400 w-56 text-center font-semibold'>
              Get Started
            </div>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <Product name='Dog Food' rating={5} img='/assets/images/dog.jpg' price={300} />
        </div>
    </div>
  );
}

export default Page;
