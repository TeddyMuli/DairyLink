"use client";

import { createClient } from '@supabase/supabase-js'
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import useSupabaseBrowser from '@/utils/supabase-browser';
import { getCooperative } from '@/queries/get_queries';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { uploadImage } from "@/utils/shared";

type formData = {
  user_id: string,
  email: string,
  username: string,
  cooperative_name: string,
  phone: string,
  registration_number: string,
  date_of_registration: string,
  location: string,
  certificate_of_registration: string,
  cooperative_constitution: string
  image: File
}

const validationSchema = z.object({
  cooperative_name: z.string().min(4, "Enter atleast 4 characters!"),
  phone: z.string().min(10, "Enter atleast 10 characters!"),
  registration_number: z.string().min(4, "Enter atleast 4 characters!"),
  date_of_registration: z.string().min(1, "This field is required!"),
  location: z.string().min(1, "This field is required!"),
  //certificate_of_registration: z.string().min(1, "This field is required!"),
  //cooperative_constitution: z.string().min(1, "This field is required!")
});

const Profile = ({ user }: { user: any }) => {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)

  const [readOnly, setReadOnly] = useState<boolean>(true);

  const [image, setImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState<String>("");
  
  const supabaseBrowser = useSupabaseBrowser();
  const { data: cooperative, isLoading, isError } = useQuery(getCooperative(supabaseBrowser, user?.id))

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { isValid, isDirty, errors }
  } = useForm<formData>({
    mode: "onChange",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      username: user?.user_metadata?.full_name,
      cooperative_name: "",
      phone: "",
      registration_number: "",
      date_of_registration: "",
      location: "",
      certificate_of_registration: "",
      cooperative_constitution: ""
    }
  });

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const isValidType = ['image/jpeg', 'image/png', 'image/gif'].includes(file.type);
      if (!isValidType) {
        setImageError("Unsupported file type!");
      } else {
        setImage(file);
        setImageError("")
      }
    }
  };

  const submitForm = async () => {
    let data = getValues();
    data.user_id = user?.id;
    const { username, ...rest } = data;

    try {
      const { error } = await supabase
        .from('cooperatives')
        .insert(rest)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (cooperative) {
      reset({
        username: user?.user_metadata?.full_name,
        cooperative_name: cooperative.cooperative_name,
        phone: cooperative.phone,
        registration_number: cooperative.registration_number,
        date_of_registration: cooperative.date_of_registration,
        location: cooperative.location,
        certificate_of_registration: cooperative.certificate_of_registration,
        cooperative_constitution: cooperative.cooperative_constitution
      });
    }
  }, [cooperative]);

  return (
    <div className='text-black'>
      <p className='text-3xl font-bold w-full'>Profile</p>
      <form onSubmit={handleSubmit(submitForm)}>
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
                <Link onClick={() => setReadOnly(false)} href={"/admin/profile/#edit_profile"} className={`${!readOnly ? "text-blue-500" : "text-black"} text-md font-semibold rounded-lg text-center active:text-blue-500`}>Edit profile</Link>
              </div>
              <p className='text-xl font-semibold'>{user?.user_metadata?.username}</p>
              <p className='font-medium text-lg text-customDarkGrey'>This will be displayed on your profile</p>
              <div className='flex flex-col gap-4 text-lg font-semibold'>
                <input
                  type="file"
                  accept='image/*'
                  onChange={handleImageChange}
                  className='cursor-pointer'
                />
                {imageError && <div className="text-red-500 text-sm font-medium">{imageError}</div>}
                <p onClick={() => uploadImage(image, user, setImageError)} className='px-3 py-2 border-2 border-black rounded-lg cursor-pointer w-1/2 hover:bg-black hover:text-white text-center'>Upload Image</p>
              </div>
            </div>
          
            <div id='edit_profile' className='p-4 bg-white rounded-xl flex flex-col gap-3'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="username" className='font-semibold text-lg'>Username</label>
                <input type="text" {...register("username")} readOnly={readOnly} id='username' placeholder='Username' className={`p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed`} />
                {errors.username && <div className="text-red-500 text-sm font-medium">{errors.username.message}</div>}
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="cooperative_name" className='font-semibold text-lg'>Cooperative Name</label>
                <input type="text" {...register("cooperative_name")} readOnly={readOnly} id='cooperative_name' placeholder='Enter Cooperative Name' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed'  />
                {errors.cooperative_name && <div className="text-red-500 text-sm font-medium">{errors.cooperative_name.message}</div>}
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="lastname" className='font-semibold text-lg'>Phone Number</label>
                <input type="text" {...register("phone")} readOnly={readOnly} id='lastname' placeholder='Enter Phone Number' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
                {errors.phone && <div className="text-red-500 text-sm font-medium">{errors.phone.message}</div>}
              </div>
            </div>
          </div>
          <div className='bg-white p-2 rounded-xl'>
            <div className='p-3 bg-white rounded-xl flex flex-col gap-2'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="registration_number" className='font-semibold text-lg'>Registration Number</label>
                <input type="text" {...register("registration_number")} readOnly={readOnly} id='registration_number' placeholder='Enter Registration Number' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
                {errors.registration_number && <div className="text-red-500 text-sm font-medium">{errors.registration_number.message}</div>}
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="date_of_registration" className='font-semibold text-lg'>Date of Registration</label>
                <input type="date" {...register("date_of_registration")} readOnly={readOnly} id='date_of_registration' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
                {errors.date_of_registration && <div className="text-red-500 text-sm font-medium">{errors.date_of_registration.message}</div>}
              </div>

              <div className='flex flex-col gap-1'>
                <label htmlFor="location" className='font-semibold text-lg'>Location</label>
                <input type="text" {...register("location")} readOnly={readOnly} id='location' placeholder='Location' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl outline-none focus:border-green-500 read-only:cursor-not-allowed' />
                {errors.location && <div className="text-red-500 text-sm font-medium">{errors.location.message}</div>}
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
