"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { supabase } from '@/utils/create_client';
import { v4 as uuidv4 } from 'uuid';

const validationSchema = z 
  .object({
    name: z.string().min(1, "This field is required"),
    quantity: z.string().min(1, "This field is required"),
    type: z.string().min(1, "This field is required"),
    description: z.string().min(1, "This field is required"),
    price: z.string().min(1, "This field is required!")
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
      price: ""
    }
   })

  const submitProduct = async () => {
    try {
      let productData = getValues();
      productData.id = uuidv4();
      const id = productData.id
      productData.cooperative_id = user?.id;
      const { error } = await supabase
        .from("products")
        .insert(productData)

      if (image) {
        const { data: imageData, error: imageError } = await supabase
          .storage
          .from("dairy_link")
          .upload(user?.id + "/" + uuidv4(), image)

          if (!imageError) {
            const picture = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${imageData?.fullPath}`

            const { data, error } = await supabase
              .from("products")
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
          <label htmlFor="name">Name</label>
          <input {...register("name")} id="name" type="text" placeholder='Enter product name' />
          {errors.name && <div className='font-medium text-red-500'>{errors.name.message}</div>}
        </div>
        <div>
          <label htmlFor="quantity">Quantity</label>
          <input {...register("quantity")} id="quantity" type="text" placeholder='Enter product quantity' />
          {errors.quantity && <div className='font-medium text-red-500'>{errors.quantity.message}</div>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input {...register("description")} id="name" type="text" placeholder='Enter product description' />
          {errors.description && <div className='font-medium text-red-500'>{errors.description.message}</div>}
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <input {...register("type")} id="type"  type="text" placeholder='Product type' />
          {errors.type && <div className='font-medium text-red-500'>{errors.type.message}</div>}
        </div>
        <div>
          <label htmlFor="price">Type</label>
          <input {...register("price")} id="price"  type="text" placeholder='Price' />
          {errors.price && <div className='font-medium text-red-500'>{errors.price.message}</div>}
        </div>
        <div>
          <label htmlFor="image">Upload product image</label>
          <input
            id='image'
            type="file"
            accept='image/*'
            onChange={handleImageChange}
            className='cursor-pointer'
          />
          {imageError && <div className="text-red-500 text-sm font-medium">{imageError}</div>}
          <button type='submit' className='px-3 py-2 border-2 border-black rounded-lg cursor-pointer w-1/2 hover:bg-black hover:text-white text-center'>Create Product</button>
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
