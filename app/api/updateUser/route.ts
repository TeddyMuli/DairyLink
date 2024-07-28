import { createClient } from '@/utils/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { picture, password, full_name } = await req.json();
  
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: password,
      data: {
        picture: picture,
        full_name: full_name
      }
    })
    if (!error) {
      return NextResponse.json({ message: "Image updated successfully!" }, { status: 200 })
    } else {
      return NextResponse.json({ error: error }, { status: 400 })
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 })
  }
}
