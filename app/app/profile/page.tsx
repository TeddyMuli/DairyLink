import Profile from '@/components/farmer/Profile';
import { getUser } from '@/components/supabase/GetUser';
import React from 'react';

const Page = async () => {
  const user = await getUser();

  return (
    <Profile user={user} />
  );
}

export default Page;
