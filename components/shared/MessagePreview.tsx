import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Star } from 'lucide-react';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { getNames } from '@/queries/get_queries';
import useSupabaseBrowser from '@/utils/supabase-browser';
import { usePathname } from 'next/navigation';

const MessagePreview = ({ message, setShowPreview, setSelectedMessage } : { message: any, setShowPreview: any, setSelectedMessage: any }) => {
  const [starClicked, setStarClicked] = useState(false);
  const pathname = usePathname();

  const supabaseBrowser = useSupabaseBrowser();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
  
    const options: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false, // Use 24-hour clock
    };
  
    if (!isToday) {
      options.year = 'numeric';
      options.month = 'short';
      options.day = 'numeric';
    }
  
    return date.toLocaleString(undefined, options);
  };
  let table, id_name
  if (pathname === "/app/messages") {
    table = "cooperatives"
  } else {
    table = "farmers"
  }

  const { data, error, isLoading } = useQuery(getNames(supabaseBrowser, table, message?.from))

  return (
    <>
      <div className='flex gap-3 py-4 w-full cursor-pointer'>
        <Checkbox />
        <Star onClick={() => setStarClicked(!starClicked)} className={`cursor-pointer ${starClicked && "text-yellow-500 fill-yellow-500"}`} />
        <div
          className='flex gap-3'
          onClick={() => {
          setShowPreview(false);
          setSelectedMessage(message);
        }}>
          <p className='font-bold'>
          {
            pathname === "/admin/messages" ? data?.firstname : data?.cooperative_name
          }            
          </p>
          <p className='text-customDarkGrey font-semibold'>{message?.header}</p>
        </div>
        <div className='ml-auto'><p className='text-customDarkGrey font-semibold'>{formatDate(message?.created_at)}</p></div>
      </div>
      <div className='border-b border-black'></div>
    </>
  );
}

export default MessagePreview;
