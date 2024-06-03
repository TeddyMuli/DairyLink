"use client";

import Image from "next/image";
import Link from "next/link";
import { menus } from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="">
      <div className="grid lg:grid-cols-3 lg:grid-rows-1 justify-center place-items-center mt-16 mb-12 text-xl">
        <div id="contacts" className="pl-8">   
          <h1 className="text-2xl font-bold mb-4 text-center">Contacts</h1>
          <p>Email: dairylinkcoop@gmail.com</p>
          <p>Phone: +254 743 376 478</p>
        </div>

        <div className="">
          <h1 className="text-2xl font-bold text-center mb-4 justify mt-4 lg:mt-0">Links</h1>
          <div className="grid grid-cols-2 grid-rows-1 gap-4">
            {menus.map((link, index) => (
              <Link key={index} href={link.path} className="hover:text-customGreen2">{link.title}</Link>
            ))}
          </div>
        </div>

        <div className="items-center">
          <a href="https://jhubafrica.com/" target="_blank" rel="noopener noreferrer">
            <Image src="/jhub.svg" alt="jhub" width={200} height={200} />
          </a>
          <a href="https://www.jkuat.ac.ke/" target="_blank" rel="noopener noreferrer">
            <Image src="/jkuat-logo.png" alt="jkuat" width={100} height={100} className="ml-8" />
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center pb-8 my-12">
        <div>
          <Link href="/terms" className="hover:text-customGreen2 mr-4">Terms of Service</Link>
          <Link href="/privacypolicy" className="hover:text-customGreen2">Privacy Policy</Link>
        </div>
        <div>
          <p>© {currentYear} DairyLink</p>
        </div>
    </div>
  </div>
  );
}
