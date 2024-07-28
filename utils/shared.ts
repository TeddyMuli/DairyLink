// Shared functions
import { createClient } from '@supabase/supabase-js'
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)

export const updateUser = async (path: string) => {
  const picture = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${path}`

  const response = await fetch('/api/updateUser', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ picture }),
  })

  if (response.ok) console.log("Success")
}

export const uploadImage = async (image: any, user: any, setImageError: any) => {
  if (image) {
    const { data, error } = await supabase
      .storage
      .from("dairy_link")
      .upload(user?.id + "/" + uuidv4(), image)

    if (!error) {
      updateUser(data.fullPath);
    }

    console.log("Image data: ", data)
    console.log("Image uploaded!")
  } else {
    setImageError("Please upload an image!");
    return;
  };
};