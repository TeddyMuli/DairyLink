import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const Compose = ({ setShowCompose } : { setShowCompose: any }) => {
  const validationSchema = z.object({
    message: z.string().min(1, "This field is required")
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
      message: ""
    }
  });

  const sendMessage = () => {
    console.log("Message sent");
  }

  return (

    <div className="fixed inset-0 justify-end items-end z-50 flex mt-auto m-4">
      <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col mx-8 w-1/3 h-2/3">
        {/* Modal content here */}
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-2xl'>Compose a message</p>
          <div onClick={() => setShowCompose(false)} className='ml-auto text-green-500 cursor-pointer'><X /></div>
        </div>
        <form className='my-4' onSubmit={handleSubmit(sendMessage)}>
          <p>To: {}</p>
          <div className='mb-4'>
            <textarea
              className='w-full border-none outline-none my-4 h-full'
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
