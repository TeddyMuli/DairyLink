import { getUser } from "@/components/supabase/GetUser";
import { redirect } from "next/navigation";
import { FC } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = async ({ children }) => {
  const user = await getUser();
  if (user) {
    if (user?.user_metadata?.accountType === "Farmer") { 
      redirect("/app");
    } else if (user?.user_metadata?.accountType === "Cooperative") {
      redirect("/admin");
    } else {
      return null;
    }
  }
  
  return (
    <main className="antialiased flex min-h-screen flex-col items-center justify-center bg-slate-100">
      {children}
    </main>
  );
};

export default AuthLayout;
