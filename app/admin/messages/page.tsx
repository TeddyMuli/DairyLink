import EmailComponent from '@/components/shared/EmailComponent';
import { getUser } from '@/components/supabase/GetUser';
import React from 'react';

const Page = async () => {
  const user = await getUser();
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-3xl font-bold w-full'>Complaints</p>
      <EmailComponent user={user} />
    </div>
  );
}

export default Page;
