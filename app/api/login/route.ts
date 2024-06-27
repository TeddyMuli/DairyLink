import { createClient } from '@/utils/supabase/server';

export default async function handler(req: { method: string; body: { email: any; password: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; }): void; new(): any; }; end: { (arg0: string): void; new(): any; }; }; setHeader: (arg0: string, arg1: string[]) => void; }) {
  if (req.method === 'POST') {
    const supabase = createClient();
    const { email, password } = req.body;

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return res.status(401).json({ error: error.message });
    }

    res.status(200).json({ message: 'Login successful' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} not allowed`);
  }
}
