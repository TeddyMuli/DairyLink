import React from 'react';
import HomePage from "@/components/HomePage";
import { getUser } from '@/components/supabase/GetUser';

const Page = () => {
  const user = getUser();
  
  return (
    <HomePage user={user} />
  );
}

export default Page;
