"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '@/utils/create_client';

const validationSchema = z
  .object({
    title: z.string().min(1, "This field is required!"),
    description: z.string().min(1, "This field is required!"),
    contentUrl: z.string().min(1, "This field is required!")
  })

const CreateBlog = ({ user } : { user: any }) => {
  const [image, setImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState<String>("");

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

  const { 
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
    register,
    getValues
   } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
      contentUrl: ""
    }
  })

  const onSubmit = async () => {
    try {
      let postData = getValues();
      postData.id = uuidv4();
      const id = postData.id
      postData.cooperative_id = user?.id;
      const { error } = await supabase
        .from("blogs")
        .insert(postData)

      if (image && !error) {
        const { data: imageData, error: imageError } = await supabase
          .storage
          .from("dairy_link")
          .upload(user?.id + "/" + uuidv4(), image)

          if (!imageError) {
            const picture = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${imageData?.fullPath}`

            const { data, error } = await supabase
              .from("blogs")
              .update({ image: picture })
              .eq("id", id)
          
            if (!error) console.log("Success")
          }
      }
  
      if (error) {
        console.error("Error inserting product: ", error)
      } else {
        console.log("Success inserting product")
      }  
    } catch (error) {
      console.error("Unexpected Error: ", error)
    }
  }

  return (
    <div>
      <label htmlFor="">Create Blog</label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' {...register("title")} placeholder='Enter title'  />
          {errors.title && <div className='text-red-500 font-medium text-sm'>{errors.title.message}</div>}
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input type="text" id='description' {...register("description")} placeholder='Enter description' />
          {errors.description && <div className='text-red-500 font-medium text-sm'>{errors.description.message}</div>}
        </div>
        <div>
          <label htmlFor="contentUrl">Url</label>
          <input type="text" id='contentUrl' {...register("contentUrl")} placeholder='Enter contentUrl' />
          {errors.contentUrl && <div className='text-red-500 font-medium text-sm'>{errors.contentUrl.message}</div>}
        </div>
        <div>
          <label htmlFor="">Image</label>
          <input
            type="file"
            accept='image/*'
            onChange={handleImageChange}
            className='cursor-pointer'
          />
          {imageError && <div className="text-red-500 text-sm font-medium">{imageError}</div>}
        </div>
        <button type='submit' className='p-3 bg-white hover:text-white hover:bg-black text-xl font-semibold text-black my-3 rounded-xl'>Create Post</button>
      </form>
    </div>
  );
}

export default CreateBlog;
