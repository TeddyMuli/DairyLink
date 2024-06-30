import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { email, password } = await req.json();
  const { data: {user} } = await supabase.auth.getUser();

    const { error } = await supabase.auth.signInWithPassword({ 
      email, 
      password, 
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 401 });
    }

  if (user?.user_metadata?.accountType === "Farmer") {
    redirect("/app");
  } else if (user?.user_metadata?.accountType === "Farmer") {
    redirect("/admin");
  } else {
    console.log("Error retrieving user account type");
  }
    
  return NextResponse.json({ message: 'Login successful' });
}
