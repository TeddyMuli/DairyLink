import { createClient } from '@/utils/supabase/server';
import { headers } from 'next/headers';

export default async function handler(req: { method: string; body: { email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
  if (req.method === 'POST') {
    const origin = headers().get("origin");
    const { email, password } = req.body;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    res.status(200).json({ message: 'Signup successful. Check your email to continue the sign-in process.' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
