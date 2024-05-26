import { FC } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="antialiased flex min-h-screen flex-col items-center justify-center bg-slate-100">
      {children}
    </main>
  );
};

export default AuthLayout;
