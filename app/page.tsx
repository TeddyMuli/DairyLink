"use client"
import { Button } from "@/components/ui";
import Image from "next/image";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Session } from "@supabase/auth-helpers-nextjs";

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [session, setSession] = useState<Session|null>(null)

  useEffect(() => {
    supabase.auth.getSession()
    .then(session => setSession(session.data.session || null))
    .catch(err => { console.log("ERROR GET SESSION: ", err) })
  }, [])

  return (
    <main className="mb-24">
      <div className="grid border-2 border-black p-4 rounded-lg my-8 mx-4 pb-12">
        <div className="flex flex-col mt-8 justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to DairyLink!</h1>
          <p className="mb-8 justify-normal">Our company and products are geared towards the satistaction of dairy cooperative's needs</p> 
        </div>
        <div className="flex flex-col items-center">
          <p className="mt-4 mb-8 px-4 py-2 bg-black text-white w-48 text-lg text-center rounded-lg"><a href="#features">View Features</a></p>
        </div>
        <div className="flex justify-center items-center">
          <div style={{ filter: "brightness(50%)" }}>
            <Image src={`/money.jpg`} alt="cow" width={200} height={200} />
          </div>
          <Image src={`/farmer.jpg`} alt="cow" width={400} height={400} />
          <div style={{ filter: "brightness(50%)" }}>
            <Image src={`/dairy_cow.jpg`} alt="cow" width={200} height={200} />
          </div>
        </div>
      </div>


      <div id="about" className="justify-center place-items-center mt-16">
        <h1 className="text-2xl font-bold mb-8 text-center">About Us</h1>
        <div className="grid grid-cols-3 grid-rows-1 gap-4">
          <div className="flex flex-col items-center border-2 border-black p-2 rounded-lg m-2">
            <p className="font-medium text-center">Our team consists of experienced professionals <br /> who deal with the creation of data management tools and application</p>
            <Image src={'/cow.png'} alt="cow" width={115} height={115} className="mt-4" />
            <span className="py-2 px-4 m-2 bg-black rounded-full">Read More</span>
          </div>
          <div className="flex flex-col items-center border-2 border-black p-2 rounded-lg m-2">
            <p className="font-medium text-center">We attach great importance to customer satisfaction</p>
            <Image src={'/service.png'} alt="service" width={115} height={115} className="mt-8" />
            <span className="py-2 px-4 m-2 bg-black rounded-full">Read More</span>
          </div>
          <div className="flex flex-col items-center border-2 border-black p-2 rounded-lg m-2">
            <p className="font-medium text-center">We value quality of service, security and a seamless user experience</p>
            <Image src={'/reliability.png'} alt="reliabilty" width={115} height={115} className="mt-8"/>
            <span className="py-2 px-4 m-2 bg-black rounded-full">Read More</span>
          </div>
        </div>
      </div>
      <div id="features" className="mt-16">
        <h1 className="text-2xl font-bold mb-12 text-center">Our Features</h1>
        <div className="grid grid-cols-4 grid-rows-1">
          <div className="flex flex-col items-center border-2 border-black py-4 px-2 rounded-lg m-2">
            <Image src={'/profile.jpg'} width={100} height={100} alt="profile" />
            <p className="text-lg mb-2 font-medium m-2">Member Profile</p>
            <p className="text-center">Enable customization & personalization</p>
            <span className="py-2 px-4 m-2 bg-black rounded-full mt-14">Read More</span>
          </div>
          <div className="flex flex-col items-center border-2 border-black py-4 px-2 rounded-lg m-2">
            <Image src={'/dashboard.jpg'} width={100} height={100} alt="profile" />
            <p className="text-lg mb-2 font-medium m-2">Interactive dashboard</p>
            <p className="text-center">Able to view graphical reports on milk, monthly payout slips and agro vet statements.</p>
            <span className="py-2 px-4 m-2 bg-black rounded-full mt-8">Read More</span>
          </div>
          <div className="flex flex-col items-center border-2 border-black py-4 px-2 rounded-lg m-2">
            <Image src={'/news.jpg'} width={100} height={100} alt="profile" />
            <p className="text-lg mb-2 font-medium m-2">Cooperative News</p>
            <p className="text-center">Ability to view updates and infromation such as e-learning materials</p>
            <span className="py-2 px-4 m-2 bg-black rounded-full mt-8">Read More</span>
          </div>
          <div className="flex flex-col items-center border-2 border-black py-4 px-2 rounded-lg m-2">
            <Image src={'/other_services.jpg'} width={100} height={100} alt="profile" />
            <p className="text-lg mb-2 font-medium m-2">Other Services</p>
            <p className="text-center">Requests for feeds, chemicals, fertilixers, A.I services, training and farm visit, soft loans, lodge & view complaints</p>
            <span className="py-2 px-4 m-2 bg-black rounded-full">Read More</span>
          </div>
        </div>
      </div>
      <div id="contacts" className="flex flex-col justify-center items-center">
        <div className="mt-16">
          <h1 className="text-2xl font-bold mb-12 text-center">Contacts</h1>
          <p>Email: info@dairylink.jhubafrica.com</p>
          <p>Phone: +254 7** *** ***</p>
        </div>
      </div>
    </main>
  );
}
