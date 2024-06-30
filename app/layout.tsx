import Footer from "@/components/shared/Footer";
import TopBar from "@/components/shared/TopBar";
import type { Metadata } from "next";
import { Inter, Quicksand, Tinos } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";

const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quickSand",
});

export const metadata: Metadata = {
  title: "DairyLink",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quickSand.variable}`}>
        <main>
          <section>
            <TopBar />
            <div>
              <ToastProvider>
                {children}
              </ToastProvider>
            </div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
