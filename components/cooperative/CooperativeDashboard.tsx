"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import FarmerCharts from "@/components/farmer/FarmerCharts";

const CooperativeDashboard = () => {
  const [scheduledVisit, setScheduledVisit] = useState("h")

  return (
    <div className='text-black'>
      {/** Personal analytics */}
      <p className='text-3xl font-bold'>Dashboard</p>
      <div className='grid py-4 gap-4'>
        <div className='grid grid-rows-1 grid-cols-2 gap-3'>
          <div className='p-3 bg-white rounded-xl'>
            <p className='text-lg text-neutral-500 font-semibold'>Cooperative</p>
            <p className='text-xl text-green-500 font-bold'>Ndumberi Dairy Farmers</p>
          </div>

          <div className='p-3 bg-white rounded-xl'>
          <p className='text-lg text-neutral-500 font-semibold'>Members</p>
          <p className='text-xl text-green-500 font-bold'>500</p>
          </div>
        </div>

        <div className='grid grid-cols-4 grid-rows-1 gap-4'>
          {/** Milk and Cows */}
          <div className='bg-white rounded-xl p-3'>
            <p className='text-lg font-semibold text-neutral-500'>Milk collected</p>
            <div className='pb-4'></div>
            <div className='flex gap-2 font-semibold items-center justify-center'>
              <span className='text-green-500 text-4xl font-bold'>30,000</span>
              <p className='text-neutral-500 text-lg'>Litres</p>
            </div>
          </div>

          {/** Money */}
          <div className='bg-white rounded-xl p-3 flex items-start flex-col'>
            <p className='text-lg font-semibold text-neutral-500'>Monthly Revenue</p>
            <div className='pb-4'></div>
            <div className='flex gap-2 font-semibold items-center justify-center'>
              <p className='text-neutral-500 text-lg'>Ksh.</p>
              <span className='text-green-500 text-4xl font-bold'>300,000</span>
            </div>
          </div>

          {/** Loans */}
          <div className='bg-white rounded-xl p-3 flex items-start flex-col'>
            <p className='text-lg font-semibold text-neutral-500'>Monthly Payouts</p>
            <div className='pb-4'></div>
            <div className='flex gap-2 font-semibold items-center justify-center'>
              <p className='text-neutral-500 text-lg'>Ksh.</p>
              <span className='text-green-500 text-4xl font-bold'>300,000</span>
            </div>
          </div>

          {/** News */}
          <div className='bg-white rounded-xl p-3 flex items-start flex-col'>
            <p className='text-lg font-semibold text-neutral-500'>Monthly profit</p>
            <div className='pb-4'></div>
            <div className='flex gap-2 font-semibold items-center justify-center'>
              <p className='text-neutral-500 text-lg'>Ksh.</p>
              <span className='text-green-500 text-4xl font-bold'>90,000</span>
            </div>
          </div>
        </div>
      </div>

      {/** Indepth analytics */}
      
      <FarmerCharts />
    </div>
  );
}

export default CooperativeDashboard;
