"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Button } from "../ui";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Features", path: "/#features" },
    { title: "About", path: "/#about" },
    { title: "Contacts", path: "/#contacts" },
    { title: "Login", path: "/auth/login" },
    { title: "Register", path: "/auth/register" },
  ];

  return (
    <nav className=" w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl  md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <h1 className="text-3xl font-bold text-white">DairyLink</h1>
          </Link>
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
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-400 hover:text-indigo-400">
                {item.title === "Register" ? (
                  <Button asChild variant={"outline"}>
                    <Link href={item.path}>{item.title}</Link>
                  </Button>
                ) : (
                  <Link href={item.path}>{item.title}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
