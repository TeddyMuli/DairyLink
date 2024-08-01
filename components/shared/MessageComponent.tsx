import React from 'react';
import { SquareChevronLeft } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { getNames } from '@/queries/get_queries';
import useSupabaseBrowser from '@/utils/supabase-browser';

const MessageComponent = ({ message, setShowPreview } : { message: any, setShowPreview: any }) => {
  const pathname = usePathname();
  const supabaseBrowser = useSupabaseBrowser()

  let table, id_name
  if (pathname === "/app/messages") {
    table = "cooperatives"
  } else {
    table = "farmers"
  }

  const { data, error, isLoading } = useQuery(getNames(supabaseBrowser, table, message?.from))

  return (
    <div>
      <button type="button" onClick={() => setShowPreview(true)}>
        <SquareChevronLeft />
      </button>
      <div>
        <div className='flex w-full justify-between'>
          <p className='font-semibold text-lg text-black'><span className='text-customDarkGrey font-medium'>From:</span> {
            pathname === "/admin/messages" ? data?.firstname : data?.cooperative_name
          }</p>
          <p className='font-semibold text-lg text-black'><span className='text-customDarkGrey font-medium'>Time:</span> {message?.time}</p>
        </div>
        <p className='font-semibold text-lg text-black'><span className='text-customDarkGrey font-medium'>Subject:</span> {message?.header}</p>
        {/** Body  */}
        <div className='border border-black p-3 my-4 rounded-xl'>
          <p className='text-lg font-medium'>{message?.body}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
