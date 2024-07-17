'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function SignOut(){
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if(!error){
    return redirect("/login?message=Logout successful");
  }
}

export async function signInWithProvider(provider: any) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }

  redirect(data.url);
}
