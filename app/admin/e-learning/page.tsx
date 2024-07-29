"use client";

import { uploadImage } from '@/utils/shared';
import React, { useState } from 'react';
import { z } from 'zod';
const validationSchema = z
  .object({
    title: z.string().min(1, "This field is required!"),
    description: z.string().min(1, "This field is required!"),
    image: z.string().min(1, "This field is required!"),
  })

const Page = () => {
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


  return (
    <div>
      <label htmlFor="">Create Blog</label>
      <form action="">
        <div>
          <label htmlFor="">Title</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input type="text" />
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
          <p onClick={() => uploadImage(image, user, setImageError)} className='px-3 py-2 border-2 border-black rounded-lg cursor-pointer w-1/2 hover:bg-black hover:text-white text-center'>Upload Image</p>
        </div>
      </form>
    </div>
  );
}

export default Page;
