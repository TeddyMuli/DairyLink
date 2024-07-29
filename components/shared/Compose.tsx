"use client";

import { getCooperative, getFarmer } from '@/queries/get_queries';
import useSupabaseBrowser from '@/utils/supabase-browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { v4 as uuidv4 } from "uuid";
import { supabase } from '@/utils/create_client';

const Compose = ({ setShowCompose, user } : { setShowCompose: any, user: any }) => {
  const supabaseBrowser = useSupabaseBrowser();
  const { data: farmer, isLoading, isError } = useQuery(getFarmer(supabaseBrowser, user?.id));
  const { data: cooperative, isLoading: cooperativeLoading, isError: cooperativeError } = useQuery(
    getCooperative(supabaseBrowser, farmer?.cooperative_id!)
    );

  const validationSchema = z
    .object({
      message: z.string().min(1, "This field is required"),
      header: z.string().min(1, "This field is required!")
    });

  const {
    reset,
    formState: { isValid, isDirty, errors },
    register,
    handleSubmit,
    getValues
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      message: "",
      header: ""
    }
  });

  const sendMessage = async () => {
    const message = getValues();
    const message_id = uuidv4();

    const {error: saveMessageError } = await supabase
      .from("messages")
      .insert({
        from: farmer?.user_id,
        header: message.header,
        body: message.message,
        message_id: message_id
      })

      if (saveMessageError) {
        console.log("Error: ", saveMessageError);
      } else {
        console.log("Success sending message");
      }
    
    if (!saveMessageError) {
      const { error: saveRecipientError } = await supabase
        .from("message_recipients")
        .insert({
          to: cooperative?.user_id,
          message_id: message_id,
          status: "delivered"
        })
        if (saveRecipientError) {
          console.log("Error: ", saveRecipientError)
        } else {
          console.log("Success sending message");
        }
    }
  }

  return (

    <div className="fixed inset-0 justify-end items-end z-50 flex mt-auto m-4 overflow-x-hidden overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col mx-8 w-1/3 h-2/3">
        {/* Modal content here */}
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-2xl'>Compose a message</p>
          <div onClick={() => setShowCompose(false)} className='ml-auto text-green-500 cursor-pointer'><X /></div>
        </div>
        <form className='my-4' onSubmit={handleSubmit(sendMessage)}>
          <p>To: {cooperative?.cooperative_name}</p>
          <div className=''>
            <input
              className='w-full border-none outline-none h-full'
              id="header"
              type='text'
              {...register("header")}
              placeholder='Type header'
            />
            {errors.header && <div className='font-medium text-red-500 text-sm'>{errors.header.message}</div>}
          </div>
          <div className='mb-4'>
            <textarea
              className='w-full border-none outline-none my-4 h-48'
              id="message"
              {...register("message")}
              placeholder='Type message'
            />
            {errors.message && <div className='font-medium text-red-500 text-sm'>{errors.message.message}</div>}
          </div>
          <button type='submit' className='p-3 bg-green-500 rounded-full text-white'>Send</button>
        </form>
      </div>
  </div>

  );
}

export default Compose;
