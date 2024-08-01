"use client";

import { getBlogs, getFarmer } from '@/queries/get_queries';
import useSupabaseBrowser from '@/utils/supabase-browser';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import Image from 'next/image';
import React from 'react';

const BlogPost = ({ user } : { user: any }) => {
  const supabaseBrowser = useSupabaseBrowser()
  const { data: farmer, error: farmerError } = useQuery(getFarmer(supabaseBrowser, user?.id))
  const { data: blogs, error: blogsError } = useQuery(getBlogs(supabaseBrowser, farmer?.cooperative_id))

  return (
    <div>
      {blogs?.map((blog, index) => {
        return (
          <div key={index} className='flex flex-col gap-3 bg-white p-3 rounded-xl'>
          <Image src={blog?.image} width={300} height={300} alt="product image" className='rounded-xl' />
          <div className='flex items-center gap-2'>
            <div className=''>
              <a href={blog.contentUrl} target="_blank" className='text-2xl font-bold cursor-pointer'>{blog.title}</a>
              <p className='text-xl text-blue-500 font-medium'>{blog.description}</p>
            </div>
          </div>
        </div>
    
        )
      })}
    </div>
  );
}

export default BlogPost;
