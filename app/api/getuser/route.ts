import { createClient } from '@/utils/supabase/server';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      return NextResponse.json({ error: `User Retrieval Error: ${error}`} , { status: 500 });;
    }
    return NextResponse.json({ message: data.user }, { status: 200 });
  } catch (error) {
      return NextResponse.json({ error: "Unexpected Error: " } , { status: 500 });
  }
}
