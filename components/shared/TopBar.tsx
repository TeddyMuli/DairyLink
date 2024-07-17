"use client";

import { menus } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "../ui";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Navbar({ user }: {user: any}) {
  const [state, setState] = React.useState(false);
  const pathname = usePathname();
  const handleSignOut = async () => {
    try {
      const response = await fetch('/api/signout', {
        method: 'POST',
      });
      const result = await response.json();
      console.log("Logout: ", result)
      if (result.error) {
        console.log('Error signing out:', result.error);
        return;
      }
      toast.success('Logged out');
      useRouter().push('/');
    } catch (error) {
      console.log('Error:', error);
    }
  }

  return (
    <nav className={`w-full my-8 ${pathname !== "/" && "hidden"}`}>
      <div className="flex flex-col items-center px-4 max-w-screen-xl  md:flex md:px-8 mx-0 lg:mx-auto">
        <div className="flex items-center justify-center py-3 md:py-5 md:block gap-8">
          <div className="flex space-x-4 md:space-x-6">
            <Link href="/">
              <h1 className="text-6xl font-bold text-accent text-slate-900">
                Dairy<span className="text-green-600">Link</span>
              </h1>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-500 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-20 md:space-y-0 md:w-full">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className={` hover:text-black hover:font-bold hover:underline hover:underline-offset-1 text-slate-500 text-2xl`}
              >
                {(item.title === "Register") ? (
                  <Button
                    asChild
                    variant={"outline"}
                    className="text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px]"
                  >
                    <Link href={item.path}>{item.title}</Link>
                  </Button>
                ) : (
                  <Link href={item.path}>{item.title}</Link>
                )}
              </li>
            ))}
          {user && (
            <Button
              onClick={handleSignOut}
              asChild
              variant={"outline"}
              className="text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] cursor-pointer"
            >
              <p>SignOut</p>
            </Button>
          )}

          </ul>
        </div>
      </div>
    </nav>
  );
}
