import CooperativeSideBar from "@/components/cooperative/CooperativeSideBar";
import FarmerTopBar from "@/components/farmer/FarmerTopBar";
import { getUser } from "@/components/supabase/GetUser";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "DairyLink",
  description: "DairyLink",
};

const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quickSand",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getUser();
  if (!user) redirect("/auth/login")
  if (user?.user_metadata?.accountType === "Farmer") redirect("/app")

  return (
    <div className={`text-black ${quickSand.variable} flex flex-row h-screen overflow-y-hidden`}>
      <div className="flex flex-col w-[17%] pt-4">
        <p className='text-center text-4xl font-semibold cursor-pointer'>Dairy<span className='text-green-500'>Link</span></p>
        <div className="overflow-y-auto my-4">
          <CooperativeSideBar />
        </div>
      </div>
      <div className="flex min-h-screen flex-1 flex-col bg-customLightGrey w-full">
        <div><FarmerTopBar user={user} /></div>
        <div className="overflow-y-auto p-4 m-4">{children}</div>
      </div>
    </div>
  );
}
