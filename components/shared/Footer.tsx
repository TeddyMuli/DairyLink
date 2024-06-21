"use client";

import { menus } from "@/constants";
import { Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border-t border-black mt-16 pt-14 px-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-4  items-start mb-12 text-xl">
        <div className="flex flex-col items-center ">
          <h1 className="text-2xl font-bold text-center mb-4  mt-4 lg:mt-0">
            Quick Links
          </h1>
          <div className="grid grid-cols-1  gap-2">
            {menus.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className="hover:text-customGreen2"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        
        <div id="contacts" className="mb-10 md:mb-0">
          <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
          <div className="flex flex-col gap-2 items-center">
            <p className="flex flex-row gap-2 items-center"><Mail />dairylinkcoop@gmail.com</p>
            <p className="flex flex-row gap-2 items-center"><PhoneCall /> +254 743 376 478</p>
          </div>
        </div>

        <div className="flex flex-row items-start">
          <a
            href="https://jhubafrica.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/svgs/jhub.svg"
              alt="jhub"
              width={200}
              height={200}
              style={{marginTop: "-40px",overflow: "hidden"}}
            />
          </a>
          <a
            href="https://www.jkuat.ac.ke/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/images/jkuat-logo.png"
              alt="jkuat"
              width={100}
              height={100}
              className="ml-8"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 justify-center items-center pb-8 my-12">
        <div>
          <Link href="/terms" className="hover:text-customGreen2 mr-4">
            Terms of Service
          </Link>
          <Link href="/privacypolicy" className="hover:text-customGreen2">
            Privacy Policy
          </Link>
        </div>
        <div>
          <p>© {currentYear} DairyLink</p>
        </div>
      </div>
    </div>
  );
}
