"use client";

import React from 'react';
import Product from './Product';
import useSupabaseBrowser from '@/utils/supabase-browser';
import { getFarmer, getProducts } from '@/queries/get_queries';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import Loading from '../Loading';

const ProductPage = ({ user } : { user: any }) => {
  const supabaseBrowser = useSupabaseBrowser();
  const { data: farmer, error: farmerError } = useQuery(getFarmer(supabaseBrowser, user?.id))
  const { data: products, error: productsError } = useQuery(getProducts(supabaseBrowser, farmer?.cooperative_id))

  return (
    <div>
      {products ? (
        products?.map((product, index) => {
          return (
            <Product key={index} name={product.name} rating={5} img={product.image} price={product?.price} />
          )
        })
      ) : (
        <Loading />
      )}
      
    </div>
  );
}

export default ProductPage;
