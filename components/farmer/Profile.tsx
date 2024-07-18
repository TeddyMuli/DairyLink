"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

interface formData {
  username: string,
  firstname: string,
  lastname: string,
  phone: string,
  idNumber: string,
  no_of_cows: string,
  DOB: string,
  nextOfKinPhone: string,
  nextOfKinName: string
}

const validationSchema = z.object({
  username: z.string().min(4, "Enter atleast 4 characters!"),
  firstname: z.string().min(4, "Enter atleast 4 characters!"),
  lastname: z.string().min(4, "Enter atleast 4 characters!"),
  phone: z.string().min(10, "Enter atleast 10 characters!"),
  idNumber: z.string().min(4, "Enter atleast 4 characters!"),
  no_of_cows: z.string().min(1, "This field is required!"),
  DOB: z.date(),
  nextOfKinPhone: z.string().min(10, "Enter atleast 10 characters!"),
  nextOfKinName: z.string().min(4, "Enter atleast 4 characters!")
})

const Profile = ({ user }: { user: any }) => {
  const [readOnly, setReadOnly] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { isValid, isDirty, errors }
  } = useForm<formData>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      username: user?.user_metadata?.full_name,
      firstname: "",
      lastname: "",
      phone: "",
      idNumber: "",
      no_of_cows: "",
      DOB: "",
      nextOfKinPhone: "",
      nextOfKinName: ""
    }
  });

  const onSubmit = () => {

  }

  return (
    <div className='text-black'>
      <p className='text-3xl font-bold w-full'>Profile</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-4 grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 my-4'>
          <div className='rounded-xl flex flex-col gap-4'>
            <div className='bg-white p-4 rounded-xl flex flex-col gap-3'>
              <div className='flex justify-between'>
                <Image
                  src={user?.user_metadata?.picture || "/assets/images/team.png"}
                  alt="profile picture"
                  width={70}
                  height={70}
                  className='rounded-full'
                />
                <Link onClick={() => setReadOnly(false)} href={"/app/profile/#edit_profile"} className={`${!readOnly ? "text-blue-500" : "text-black"} text-md font-semibold rounded-lg text-center active:text-blue-500`}>Edit profile</Link>
              </div>
              <p className='text-xl font-semibold'>{user?.user_metadata?.username}</p>
              <p className='font-medium text-lg text-customDarkGrey'>This will be displayed on your profile</p>
              <div className='flex gap-4 text-lg font-semibold'>
                <p className='px-3 py-2 border-2 border-black rounded-lg cursor-pointer hover:bg-black hover:text-white'>Upload New</p>
                <p className='px-3 py-2 bg-blue-500 text-white rounded-lg cursor-pointer'>Save</p>
              </div>
            </div>
          
            <div id='edit_profile' className='p-4 bg-white rounded-xl flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="username" className='font-semibold text-lg'>Username</label>
                <input type="text" {...register("username")} readOnly={readOnly} id='username' placeholder='Username' className={`p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed`} />
                {errors.username && <div className="text-red-500 text-sm font-medium">{errors.username.message}</div>}
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="firstname" className='font-semibold text-lg'>First Name</label>
                <input type="text" {...register("firstname")} readOnly={readOnly} id='firstname' placeholder='Enter First Name' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed'  />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="lastname" className='font-semibold text-lg'>Last Name</label>
                <input type="text" {...register("lastname")} readOnly={readOnly} id='lastname' placeholder='Enter Last Name' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
              </div>
            </div>
          </div>
          <div className='bg-white p-2 rounded-xl'>
            <div className='p-3 bg-white rounded-xl flex flex-col gap-2'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="phone" className='font-semibold text-lg'>Phone Number</label>
                <input type="text" {...register("phone")} readOnly={readOnly} id='phone' placeholder='Enter Phone Number' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="idNumber" className='font-semibold text-lg'>ID Number</label>
                <input type="text" {...register("idNumber")} readOnly={readOnly} id='idNumber' placeholder='Enter ID number' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="no_of_cows" className='font-semibold text-lg'>Number of cows</label>
                <input type="text" {...register("lastname")} readOnly={readOnly} id='no_of_cows' placeholder='Number of cows' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="DOB" className='font-semibold text-lg'>Date of birth</label>
                <input type="text" {...register("DOB")} readOnly={readOnly} id='DOB' placeholder='Date of birth' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="nextOfKinName" className='font-semibold text-lg'>Next of Kin (name)</label>
                <input type="text" {...register("nextOfKinName")} readOnly={readOnly} id='nextOfKinName' placeholder='Next of Kin (name)' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="nextOfKinPhone" className='font-semibold text-lg'>Next of Kin (phone)</label>
                <input type="text" {...register("nextOfKinPhone")} readOnly={readOnly} id='nextOfKinPhone' placeholder='Next of Kin (phone)' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
              </div>
            </div>
            
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button type="submit" disabled={!isValid || !isDirty} className="py-4 bg-blue-600 cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed font-bold text-2xl rounded-lg text-white w-[500px]">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;
