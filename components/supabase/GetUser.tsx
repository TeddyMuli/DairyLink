"use server";

import { createClient } from '@/utils/supabase/server'

export const getUser = async () => {
  try {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      console.error("User Retrieval Error: ", error);
      return null;
    }
    return data.user;
  } catch (error) {
    console.error("Unexpected Error: ", error);
    return null;
  }
}
