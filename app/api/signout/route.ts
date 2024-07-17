import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut({scope: "local"});
  if (error) {
    return NextResponse.json({error: error.message}, {status: 401});
  }
  return NextResponse.json({ message: 'Signed out successfully' }, { status: 200 });
}
