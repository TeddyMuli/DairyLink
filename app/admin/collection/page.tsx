"use client";

import FarmerInput from '@/components/cooperative/FarmerInput';
import { getAllFarmers, getFarmer } from '@/queries/get_queries';
import useSupabaseBrowser from '@/utils/supabase-browser';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import React, { useState } from 'react';

const Page = () => {
  const supabaseBrowser = useSupabaseBrowser();
  const [searchValue, setSearchValue] = useState("")

  const { data: farmers, error: farmersError, isLoading: farmersLoading } = useQuery(getAllFarmers(supabaseBrowser))

  return (
    <div>
      <div>
        <label htmlFor="search">Search with phone number</label>
        <input type="text" placeholder='Search for farmer' id='search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}  />
      </div>
      <div>
        {farmers?.map((farmer, index) => {
          return (
            <div key={index}>
              <FarmerInput farmer={farmer} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Page;
