import React from 'react';
import FarmerDashboard from '@/components/farmer/FarmerDashboard';
import { getUser } from '@/components/supabase/GetUser';

const Page = async () => {
  const user = await getUser();
  
  return (
    <div className=''>
      {/** Dashboard */}
        <FarmerDashboard user={user} />
    </div>
  );
}

export default Page;
