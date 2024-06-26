"use client";

import { supabase } from "@/lib/supabase";
import { Session } from "inspector";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { providers } from "@/constants";
import { login, signup } from '../action';

interface formData {
  email_address: string,
  password: string,
  remember_me: boolean
}


type AlertProps = {
  type: "info" | "error";
  msg: string;
};

const Alert: React.FC<AlertProps> = ({ type, msg }) => {
  let style = "";

  switch (type) {
    case "info":
    default:
      style = "bg-blue-100 border-blue-300 text-blue-600";
      break;
    case "error":
      style = "bg-red-100 border-red-300 text-red-600";
      break;
  }

  return (
    <div
      className={`text-xs py-2 px-2 flex gap-2 mb-2 w-72 border rounded-md ${style}`}
    >
      <strong>{type}: </strong>
      <span>{msg}</span>
    </div>
  );
};

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState<AlertProps>();
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  const backgroundImageStyle = {
    backgroundImage: "url('/assets/dairy_cow.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '130vh',
    width: '100%',
  };
  const [formData, setFormData] = useState<formData>({
    email_address: "",
    password: "",
    remember_me: false
  })

  return (
    <div style={backgroundImageStyle}>
      <div className="container mx-auto grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 text-xl pt-4">
        <div className="flex flex-col justify-center items-center text-6xl text-left bg-white bg-opacity-30 w-[500px] rounded-xl ml-8">
          <h1 className="font-bold mt-[100px]">DairyLink</h1>
          <div className="my-auto">
            <p className="text-green-800 font-medium">Connecting<br />dairy farmers<br />and simplifying<br /><span className="font-extrabold">success</span></p>
          </div>
        </div>
        <div className="bg-white rounded-xl m-8 p-8">
          <h1 className="text-center text-6xl font-extrabold p-4">Welcome</h1>
          <p className="text-center font-semibold pb-4">Create an account or login to access DairyLink</p>
          <div className="px-8">
            <div className="flex flex-col">
              <label className="text-xl p-2">Email address</label>
              <input
                type="text"
                name=""
                placeholder="Email address"
                className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xl p-2">Enter Password</label>
              <input
                type="password"
                name=""
                className="p-4 border-2 border-black/40 focus:border-green-500 rounded-lg outline-none"
                placeholder="Enter Password"
              />
            </div>
            <div className="flex gap-4 py-4">
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
            </div>
            <div className="flex justify-center items-center">
              <button formAction={login} className="py-4 bg-blue-600 font-bold text-2xl rounded-lg text-white w-[500px]">Login</button>
            </div>
            <div className="flex justify-center items-center py-4">
              <p>Don't have an account? <Link href="/auth/register" className="text-blue-600 font-bold">SignUp</Link></p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Image
                src="/assets/pendulum.png"
                alt="pendulum"
                width={50}
                height={50}
              />
              <div className="flex flex-row gap-[100px] pt-2">
                {providers.map((provider, index) => {
                  return (
                    <Image
                      key={index}
                      src={provider.src}
                      alt={provider.alt}
                      width={50}
                      height={50}
                      className="cursor-pointer"
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
