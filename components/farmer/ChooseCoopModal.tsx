"use client";

import React, { useEffect, useState } from 'react';
import useSupabaseBrowser from '@/utils/supabase-browser';
import { getAllCooperatives } from '@/queries/get_queries';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import Loading from '../Loading';
import LoadingError from '../LoadingError';
import { Dot, X } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'react-toastify';
import Image from 'next/image';

const ChooseCoopModal = ({ isModalOpen, setIsModalOpen, user_id } : { isModalOpen: boolean, setIsModalOpen: any, user_id: string }) => {
  const supabaseBrowser = useSupabaseBrowser();
  const [loading, setLoading] = useState(false);

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
  const { data: cooperatives, error, isLoading } = useQuery(getAllCooperatives(supabaseBrowser));

  const joinCooperative = async (cooperative_id: string) => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from("farmers")
        .update({ cooperative_id: cooperative_id})
        .eq('user_id', user_id)

      if (!error) {
        toast.success("Success joining cooperative!");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error joining cooperative: ", error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='modal'>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-opacity-70 bg-white p-4">
          {isLoading && <Loading />}
          {error && <LoadingError />}
          {(!error && !isLoading) && (
            <div className="bg-customLightGrey rounded-lg shadow-lg p-6 flex flex-col mx-8">
              {/* Modal content here */}
              <div onClick={() => setIsModalOpen(false)} className='ml-auto text-green-500 cursor-pointer'><X /></div>
              <p className='font-semibold text-2xl text-center'>Select a cooperative</p>

              <div className='flex flex-wrap gap-4 justify-center items-center my-4 rounded-xl p-4'>
                {cooperatives?.map((cooperative, index) => {
                  return (
                    <div key={index} className='flex flex-col gap-1 bg-white p-3 rounded-xl'>
                      <div className='flex gap-2'>
                        {/**<Image src={} alt="profile pic" width={8} height={8} />*/}
                        <p className='text-green-500 text-xl font-semibold'>{cooperative.cooperative_name}</p>
                      </div>
                      <p className='flex font-medium'><Dot/>{cooperative.location}</p>
                      <p className='flex font-medium'><Dot/>{cooperative.phone}</p>
                      <button onClick={() => joinCooperative(cooperative.user_id!)} className='p-2 text-white cursor-pointer bg-green-500 rounded-xl my-2 font-medium'>
                        {loading ?
                          <Loading />
                          : 
                          "Join"
                        }
                      </button>
                    </div>
                  )})}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ChooseCoopModal;
