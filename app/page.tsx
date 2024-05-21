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
      <div className="flex border-2 border-black p-4 rounded-lg my-8 mx-4">
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-4">Welcome to DairyLink!</h1>
          <p className="mb-8">Our company and products are geared towards the <br></br> satistaction of dairy cooperative's needs</p>
          <p className="px-4 py-2 bg-black text-white w-48 text-lg text-center rounded-lg mt-24"><a href="#features">View Features</a></p>
        </div>
        <Image src={`/cool cow.jpeg`} alt="cow" width={451} height={400} className="ml-auto" />
      </div>
      <div id="about" className="justify-center place-items-center mt-16">
        <h1 className="text-2xl font-bold mb-8 text-center">About Us</h1>
        <div className="flex">
          <div className="grid justify-center place-items-center">
            <p>Our team consists of experienced professionals <br /> who deal with the creation of data management tools and application</p>
            <Image src={'/cow.png'} alt="cow" width={115} height={115} className="mt-4" />
          </div>
          <div className="grid justify-center place-items-center">
            <p>We attach great importance to customer satisfaction</p>
            <Image src={'/service.png'} alt="service" width={115} height={115} className="mt-4" />
          </div>
          <div className="grid justify-center place-items-center">
            <p>We value quality of service, security and a seamless user experience</p>
            <Image src={'/reliability.png'} alt="reliabilty" width={115} height={115} className="mt-4"/>
          </div>
        </div>
      </div>
      <div id="features" className="mt-16">
        <h1 className="text-2xl font-bold mb-12 text-center">Our Features</h1>
        <div className="grid place-items-center">
          <ul className="list-disc font-medium">
            <li className="py-2">Allow cooperatives and farmers to create and update profiles</li>
            <li className="py-2">Ability to view reports on milk, monthly payout slips and agrovet slips</li>
            <li className="py-2">Ability to view updates and information such as e-learning materials</li>
            <li className="py-2">Request for feeds, chemicals, fertilizers, A.I services, training and farm visits, soft loans, lodge and view complaints</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
