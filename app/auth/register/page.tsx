import Image from "next/image";
import React from "react";
import { providers } from "@/constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

export default function Page() {
    const backgroundImageStyle = {
      backgroundImage: "url('/assets/dairy_cow.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '180vh',
      width: '100%',
    };

    const radioStyles = "flex gap-4 border-2 border-black/40 rounded-xl p-4 hover:border-green-500 checked:border-green-500 cursor-pointer";
    const linkStyles = "text-blue-400"

    return (
        <div style={backgroundImageStyle}>
          <div className="container mx-auto grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 text-xl">
            <div className="flex flex-col justify-center items-center text-6xl text-left bg-white bg-opacity-30 w-[500px] rounded-xl ml-8">
              <h1 className="font-bold mt-[100px]">DairyLink</h1>
              <div className="my-auto">
                <p className="text-green-800 font-medium">Connecting<br />dairy farmers<br />and simplifying<br /><span className="font-extrabold">success</span></p>
              </div>
            </div>
            <div className="bg-white rounded-xl m-8 p-4">
              <h1 className="text-center text-5xl font-extrabold py-4">Create your account</h1>
              <div className="px-8">
                <div className="flex flex-col">
                  <label className="text-lg p-2">User name</label>
                  <input
                    type="text"
                    name=""
                    placeholder="Enter your Username"
                    className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-lg p-2">Email address</label>
                  <input
                    type="text"
                    name=""
                    placeholder="Email address"
                    className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none"
                  />
                </div>
                {/** Radio Buttons  */}
                <div className="py-4">
                  <label className="text-lg">Account Type</label>
                </div>
                <div className="flex justify-between gap-4 mx-auto cursor-pointer">
                  <RadioGroup>
                    <label htmlFor="Farmer" className={radioStyles}>
                      <RadioGroupItem value="Farmer" id="Farmer" />
                      <p>Farmer</p>
                    </label>
                    <label htmlFor="Cooperative" className={radioStyles}>
                      <RadioGroupItem value="Cooperative" id="Cooperative" />
                      <p>Cooperative</p>
                    </label>
                  </RadioGroup>
                </div>
    
                <div className="flex flex-col">
                  <label className="text-lg p-2">New Password</label>
                  <input
                    type="text"
                    name=""
                    className="p-4 border-2 border-black/40 focus:border-green-500 rounded-lg outline-none"
                    placeholder="Enter new Password"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-lg p-2">Confirm Password</label>
                  <input
                    type="text"
                    name=""
                    className="p-4 border-2 border-black/40 focus:border-green-500 rounded-lg outline-none"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="flex gap-4 py-4">
                  <input type="checkbox" name="" id="" />
                  <p>Remember me</p>
                </div>
                <div>
                  <p className="text-sm pb-4">By signing up you agree to our, <Link className={linkStyles} href="/privacypolicy">privacy policy</Link>, <Link className={linkStyles} href="/terms">terms of service</Link> and <Link className={linkStyles} href="/cookies">cookie policy</Link></p>
                </div>
                <div className="flex justify-center items-center">
                  <button className="py-4 bg-blue-600 font-bold text-2xl rounded-lg text-white w-[500px]">Sign Up</button>
                </div>
                <div className="flex justify-center items-center py-4">
                  <p>Have an account? <Link href="/auth/login" className="text-blue-600 font-bold">Login</Link></p>
                </div>
                <div className="flex justify-center">
                  <div className="border-t w-24 border-black mt-3.5"></div>
                  <p className="px-4">Or</p>
                  <div className="border-t w-24 border-black mt-3.5"></div>
                </div>
                <p className="text-center py-4">Sign up with</p>
                <div className="flex flex-col justify-center items-center">
                  <div className="flex flex-row gap-[100px] pt-2 pb-8">
                    {providers.map((provider, index) => {
                      return (
                        <div key={index} className="cursor-pointer bg-zinc-300 p-4 rounded-lg">
                          <Image
                            src={provider.src}
                            alt={provider.alt}
                            width={50}
                            height={50}
                            className="cursor-pointer"
                          />
                        </div>
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
