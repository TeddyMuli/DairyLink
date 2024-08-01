import BlogPost from '@/components/farmer/BlogPost';
import { getUser } from '@/components/supabase/GetUser';
import React from 'react';

const Page = async () => {
  const user = await getUser();

  return (
    <div>
      <BlogPost user={user} />
    </div>
  );
}

export default Page;
