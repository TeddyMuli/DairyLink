"use client";

import { supabase } from '@/utils/create_client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const validationSchema = z
  .object({
    volume: z.string().min(1, "This field is required!")
  })

const FarmerInput = ({ farmer } : { farmer: any }) => {
  const {
    formState: { errors, isValid, isDirty },
    handleSubmit,
    reset,
    register,
    getValues
   } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      volume: ""
    }
  });

  const onSubmit = async () => {
    try {
      let data = getValues()
      data.farmer_id = farmer?.user_id
      const { error } = await supabase
        .from("milk_reports")
        .insert(data)  
      
      if (error) console.error("Error while updating milk_reports table: ", error)
    } catch (error) {
      console.error("Unexpected Error: ", error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className='text-black font-semibold'>{farmer?.firstname || "No farmer"}</p>
        <div>
          <label htmlFor="volume">Milk Volume</label>
          <input type="text" id='volume' {...register("volume")} />
        </div>
        
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default FarmerInput;
