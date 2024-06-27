'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { headers } from 'next/headers'

export async function login(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,

  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error(error)
  }

  //revalidatePath('/', 'layout')
  console.log('Success')
}

export async function signup(formData: FormData){
  const origin = headers().get("origin");
  const email = formData.get('email') as string;
  const password = formData.get("password") as string;
  const supabase = createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
  });

  if(error){
    console.log("Could not create user");
  }

  console.log("Check email to continue sign in process");
}

export async function SignOut(){
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();
  if(!error){
    return redirect("/login?message=Logout successful");
  }
}

export async function signInWithGoogle() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
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

