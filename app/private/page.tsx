import { createClient } from '@/utils/supabase/server';
import { getUser } from '@/components/supabase/GetUser';

export default async function PrivatePage() {
  const user = await getUser();

  if (user) {
    console.log("User Data: ", user)
  } else {
    console.log("No user data retrieved.");
  }
  
  return <p>Hello {user?.user_metadata?.full_name} is a {user?.user_metadata?.accountType}</p>
}
