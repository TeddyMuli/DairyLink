"use client";

import React, { useState } from 'react';

export const Step1 = ({ nextStep, formData, handleFormDataChange } : {nextStep: any, formData: any, handleFormDataChange: any}) => (
  <div>
    <h2>Step 1</h2>
    <form>
      <div className='grid grid-cols-1 grid-rows-3 gap-4 pb-4'>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='firstname'>FirstName</label>
          <input value={formData.firstname} placeholder='Enter firstName' onChange={handleFormDataChange} type="text" id="firstname" name='firstname' className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none" />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='firstname'>LastName</label>
          <input value={formData.lastname} placeholder='Enter lastName' onChange={handleFormDataChange} type="text" id="firstname" name='firstname' className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none" />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='firstname'>Phone Number</label>
          <input value={formData.phone_number} placeholder='Enter placeholder' onChange={handleFormDataChange} type="text" id="firstname" name='firstname' className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none" />
        </div>
      </div>
      <div className='py-4'>
        <button type="button" className='px-4 py-2 rounded-lg bg-green-500 text-xl text-white font-semibold' onClick={nextStep}>Next</button>
      </div>
    </form>
  </div>
);

export const Step2 = ({ prevStep, nextStep, formData, handleFormDataChange } : {prevStep: any, nextStep: any, formData: any, handleFormDataChange: any}) => (
  <div>
    <h2>Step 2</h2>
    <form>
      <div className='grid grid-cols-1 grid-rows-3 gap-4 pb-4'>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='dob'>Date of birth</label>
          <input value={formData.dob} placeholder='Enter date of birth' onChange={handleFormDataChange} type="text" id="dob" name='dob' className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none" />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='national_id'>National ID</label>
          <input value={formData.national_id} placeholder='Enter national ID' onChange={handleFormDataChange} type="text" id="national_id" name='national_id' className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none" />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='krapin'>KRA Pin</label>
          <input value={formData.kra_pin} placeholder='Enter KRA Pin' onChange={handleFormDataChange} type="text" id="krapin" name='krapin' className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none" />
        </div>
      </div>
      <div className='flex gap-4 py-4'>
        <button type="button" className='px-4 py-2 rounded-lg bg-green-500 text-xl text-white font-semibold' onClick={prevStep}>Previous</button>
        <button type="button" className='px-4 py-2 rounded-lg bg-green-500 text-xl text-white font-semibold' onClick={nextStep}>Next</button>
      </div>
    </form>
  </div>
);

export const Step3 = ({ prevStep, submit, formData, handleFormDataChange } : {prevStep: any, submit: any, formData: any, handleFormDataChange: any}) => (
  <div>
    <h2>Step 3</h2>
    <form>
      <div className='grid grid-cols-1 grid-rows-3 gap-4 pb-4'>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='postal_address'>Postal Address</label>
          <input value={formData.postal_address} placeholder='Enter Postal Address' onChange={handleFormDataChange} type="text" id="postal_address" name='postal_address' className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none" />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='milk_collection'>Milk Collection Center</label>
          <input value={formData.milk_collection} placeholder='Enter Milk collection collection' onChange={handleFormDataChange} type="text" id="milk_collection" name='milk_collection' className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none" />
        </div>
        <div className='flex flex-col items-start gap-2'>
          <label htmlFor='no_of_cows'>Number of cows</label>
          <input value={formData.no_of_cows} placeholder='Enter number of cows' onChange={handleFormDataChange} type="text" id="no_of_cows" name='no_of_cows' className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none" />
        </div>
      </div>
      <div className='flex gap-4 py-4'>
        <button type="button" className='px-4 py-2 rounded-lg bg-green-500 text-xl text-white font-semibold' onClick={prevStep}>Previous</button>
        <button type="button" className='px-4 py-2 rounded-lg bg-green-500 text-xl text-white font-semibold' onClick={submit}>Submit</button>
      </div>
    </form>
  </div>
);

export default function FarmerOnboarding () {
  
}
