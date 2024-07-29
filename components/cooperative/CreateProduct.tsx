"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { supabase } from '@/utils/create_client';
import { uploadImage } from '@/utils/shared';

const validationSchema = z 
  .object({
    name: z.string().min(1, "This field is required"),
    quantity: z.string().min(1, "This field is required"),
    type: z.string().min(1, "This field is required"),
    description: z.string().min(1, "This field is required"),
    image: z.string().min(1, "This field is required"),
  })

const CreateProduct = ({ user } : { user: any }) => {
  const [image, setImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState<String>("");

  const { 
    formState: { isValid, errors },
    getValues,
    reset,
    register,
    handleSubmit
   } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      quantity: "",
      type: "",
      description: "",
      image: "",
    }
   })

  const submitProduct = async () => {
    let productData = getValues();
    productData.cooperaive_id = user?.id;
    const { error } = await supabase
      .from("products")
      .insert(productData)
  };

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
      <form onSubmit={handleSubmit(submitProduct)}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" placeholder='Enter product name' />
        </div>
        <div>
          <label htmlFor="">Quantity</label>
          <input type="text" placeholder='Enter product quantity' />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input type="text" placeholder='Enter product description' />
        </div>
        <div>
          <label htmlFor="">Type</label>
          <input type="text" placeholder='Product type' />
        </div>
        <div>
          <label htmlFor="">Upload product image</label>
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

export default CreateProduct;
