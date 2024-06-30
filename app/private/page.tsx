import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    console.error("User Retrieval Error: ", error);
  }
  console.log("User Data: ", data)

  return <p>Hello {data?.user?.user_metadata?.username} is a {data?.user?.user_metadata?.accountType}</p>
}
