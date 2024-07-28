"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import FarmerCharts from "@/components/farmer/FarmerCharts";
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { getCooperative, getFarmer } from '@/queries/get_queries';
import useSupabaseBrowser from '@/utils/supabase-browser';
import ChooseCoopModal from './ChooseCoopModal';

const FarmerDashboard = ({ user } : { user: any }) => {
  const supabaseBrowser = useSupabaseBrowser();
  const [scheduledVisit, setScheduledVisit] = useState("h");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: farmer, isLoading, isError } = useQuery(getFarmer(supabaseBrowser, user?.id));
  const { data: cooperative, isLoading: cooperativeLoading, isError: cooperativeError } = useQuery(
  getCooperative(supabaseBrowser, farmer?.cooperative_id!)
  );

  return (
    <div className='text-black'>
      {/** Personal analytics */}
      <p className='text-3xl font-bold'>Dashboard</p>
      <ChooseCoopModal user_id={user?.id} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <div className='grid py-4 gap-4'>
        <div className='grid grid-rows-1 grid-cols-2 gap-3'>
          <div className='p-3 bg-white rounded-xl'>
            <p className='text-lg text-neutral-500 font-semibold'>Cooperative</p>

            <div className='text-xl text-green-500 font-bold'>
              {cooperative?.cooperative_name ?
                <p>{cooperative?.cooperative_name}</p> :
                <div>
                  <p>No cooperative found</p>
                  <p onClick={() => setIsModalOpen(true)} className='text-sm cursor-pointer text-blue-500'>Join a cooperative</p>
                </div>
              }
            </div>
          </div>
          
          <div className='p-3 bg-white rounded-xl'>
          <p className='text-lg text-neutral-500 font-semibold'>Members</p>
          <p className='text-xl text-green-500 font-bold'>500</p>
          </div>
        </div>

        <div className='grid grid-cols-4 grid-rows-1 gap-4'>
          {/** Milk and Cows */}
          <div className='grid grid-cols-1 grid-rows-2 gap-4 w-full h-full'>
            <div className='bg-white rounded-xl p-3'>
              <p className='text-lg font-semibold text-neutral-500'>Scheduled visit</p>
              <div className='flex flex-col text-xl font-semibold justify-center items-left gap-1'>
                {scheduledVisit ? (
                  <>
                    <p className='text-lg'>Tomorrow</p>
                    <div className='flex justify-start place-items-center gap-2'>
                      <p className='text-green-500 text-4xl font-bold'>11.30</p>
                      <p className='text-2xl text-neutral-500'>a.m</p>
                    </div>
                  </>
                ) : (
                  <div>
                    <p className='text-lg font-medium'>None</p>
                    <Link href="/services" className='text-green-500 text-[14px]'>Schedule a Veterinary visit</Link>
                  </div>
                )}
                
              </div>
            </div>
            <div className='flex flex-col bg-white rounded-xl p-3'>
              <div className='flex items-start gap-1'>
                <p className='text-lg font-semibold text-neutral-500 text-center'>Monthly Milk Output </p>
              </div>
              <div className='pb-4'></div>
              <div className='flex items-center font-semibold gap-2'>
                <p className='text-4xl text-green-500 font-bold'>300</p>
                <p className='text-neutral-500 text-lg font-bold'>Litres</p>
              </div>
            </div>
          </div>

          {/** Money */}
          <div className='grid grid-cols-1 grid-rows-2 gap-4'>
            <div className='bg-white rounded-xl p-3 flex items-start flex-col'>
              <p className='text-lg font-semibold text-neutral-500'>Monthly Revenue</p>
              <div className='pb-4'></div>
              <div className='flex gap-2 font-semibold items-center justify-center'>
                <p className='text-neutral-500 text-lg'>Ksh.</p>
                <span className='text-green-500 text-4xl font-bold'>30,000</span>
              </div>
            </div>

            <div className='bg-white rounded-xl p-3 flex items-start flex-col'>
              <p className='text-lg font-semibold text-neutral-500'>Cows</p>
              <div className='pb-4'></div>
              <div className='flex gap-2 font-semibold items-center justify-center'>
                <span className='text-green-500 text-4xl font-bold'>30</span>
                <p className='text-neutral-500 text-lg'>Cows</p>
              </div>
            </div>
          </div>

          {/** Loans */}
          <div className='bg-white rounded-xl p-3'>
            <p className='text-lg font-semibold text-neutral-500'>Loans</p>
          </div>

          {/** News */}
          <div className='bg-white rounded-xl p-3'>
          <p className='text-lg font-semibold text-neutral-500'>News</p>
          </div>
        </div>
      </div>

      {/** Indepth analytics */}
      
      <FarmerCharts />
    </div>
  );
}

export default FarmerDashboard;
