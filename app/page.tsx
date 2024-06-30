import Home from '@/components/HomePage';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export  default async function Page() {
  const supabase = createClient();

  const { data: {user}, error } = await supabase.auth.getUser()
  if (error || !user) {
    console.log("User Retrieval Error: ", error)
  }
  return (
    <>
      <p>Hello {user?.user_metadata?.username}</p>
      <div>
        <Home />
      </div>
    </>
  );
}
``