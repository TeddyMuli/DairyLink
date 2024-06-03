"use client";
import InfoFlipCard from "@/components/InfoFlipCard";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";
import TopBar from "@/components/shared/TopBar";
import Link from "next/link";
import TeamMember from "@/components/TeamMember";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then((session) => setSession(session.data.session || null))
      .catch((err) => {
        console.log("ERROR GET SESSION: ", err);
      });
  }, []);

  return (
    <main className="">
      <div className="grid rounded-lg pb-12">
        <div className="bg-customGreen text-white p-10">
          <div className="flex flex-col mt-24 justify-center items-center">
            <h1 className="animate-typing overflow-hidden border-r-4 border-r-white text-xl mb-4 text-center">YOUR TRUSTED PATNER IN</h1>
            <p className="mb-8 justify-normal text-6xl max-w-[800px] text-center">
              CONNECTING DAIRY FARMERS AND SIMPLIFYING SUCCESS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/#features" className="mt-4 mb-8 px-4 py-2 bg-black text-white w-48 text-lg text-center rounded-lg">
              View Features
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/** 
          <div style={{ filter: "brightness(50%)" }}>
            <Image src={`/money.jpg`} alt="cow" width={200} height={200} />
          </div>
          */}
          <div style={{ position: 'relative', width: '100%', height: '500px' }}>
            <Image src={`/cowlandscape.jpg`} alt="cow" layout="fill" objectFit="cover" />
          </div>
          {/** 
          <div style={{ filter: "brightness(50%)" }}>
            <Image src={`/dairy_cow.jpg`} alt="cow" width={200} height={200} />
          </div>
          */}
        </div>
      </div>
      <div className="bg-customGreen -mt-12 text-white py-16">
        <div id="about" className="justify-center place-items-center">
          <h1 className="text-6xl mb-8 text-center">About Us</h1>
          <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 text-xl">
            <div className="flex flex-col items-center p-2 rounded-lg m-2 gap-2">
              <p className="font-medium text-center">
                Our team consists of experienced professionals <br /> who deal
                with the creation of data management tools and application
              </p>
              <></>
              <Image
                src={"/cow.png"}
                alt="cow"
                width={115}
                height={115}
                className="mt-4 filter invert brightness-0"
              />
              {/* <Button className="bg-black rounded-full">Read More</Button> */}
            </div>
            <div className="flex flex-col items-center p-2 rounded-lg m-2 gap-2">
              <p className="font-medium text-center">
                We attach great importance to customer satisfaction
              </p>
              <Image
                src={"/service.png"}
                alt="service"
                width={115}
                height={115}
                className="mt-8 filter invert brightness-0"
              />
              {/* <Button className="bg-black rounded-full">Read More</Button> */}
            </div>
            <div className="flex flex-col items-center p-2 rounded-lg m-2 gap-2">
              <p className="font-medium text-center">
                We value quality of service, security and a seamless user
                experience
              </p>
              <Image
                src={"/reliability.png"}
                alt="reliabilty"
                width={115}
                height={115}
                className="mt-8 filter invert brightness-0"
              />
              {/* <Button className="bg-black rounded-full">Read More</Button> */}
            </div>
          </div>
        </div>
      <div id="features" className="mt-16 p-2 border-t border-white mx-6">
        <div className="text-4xl mb-12 text-right max-w-[400px] mt-4">DISCOVER THE FEATURES OF OUR UPCOMING APP</div>
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-3 text-xl">
          <InfoFlipCard
            frontContent={
              <>
                <Image
                  src={"/profile.jpg"}
                  width={500}
                  height={500}
                  alt="profile"
                />
                <p className="my-2 font-medium">Member Profile</p>
              </>
            }
            backContent={
              <>
                <p className="text-center">
                  Enable customization & personalization
                </p>
              </>
            }
          />
          <InfoFlipCard
            frontContent={
              <>
                <Image
                  src={"/dashboard.jpg"}
                  width={500}
                  height={500}
                  alt="profile"
                />
                <p className="my-2 font-medium">
                  Interactive Dashboard
                </p>
              </>
            }
            backContent={
              <>
                <p className="text-center">
                  Able to view graphical reports on milk, monthly payout slips
                  and agro vet statements.
                </p>
              </>
            }
          />
          <InfoFlipCard
            frontContent={
              <>
                <Image
                  src={"/news.jpg"}
                  width={500}
                  height={500}
                  alt="profile"
                />
                <p className="my-2 font-medium">Cooperative News</p>
              </>
            }
            backContent={
              <>
                <p className="text-center">
                  Ability to view updates and infromation such as e-learning
                  materials
                </p>
              </>
            }
          />
          <InfoFlipCard
            frontContent={
              <>
                <Image
                  src={"/other_services.jpg"}
                  width={500}
                  height={500}
                  alt="profile"
                />
                <p className="my-2 font-medium">Other Services</p>
              </>
            }
            backContent={
              <>
                <p className="text-center">
                  Requests for feeds, chemicals, fertilixers, A.I services,
                  training and farm visit, soft loans, lodge & view complaints
                </p>
              </>
            }
          />
        </div>
      </div>

      <div id="team" className="border-t-2 border-white py-6 mx-6 mt-10">
        <h1 className="text-6xl text-center py-4 mb-4 text-white">Meet the team</h1>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 px-8 justify-center place-items-center pt-6">
          <div>
            {/** 7 */}
            <TeamMember name="Dr. Nderu" />
          </div>
          <div>
            {/** 1 */}
            <TeamMember name="ian karanja" />
          </div>
          <div>
            {/** 2 */}
            <TeamMember name="Teddy muli" />
          </div>
          <div>
            {/** 3 */}
            <TeamMember name="alfred warui" />
          </div>
          <div>
            {/** 4 */}
            <TeamMember name="samuel" />
          </div>
          <div>
            {/** 5 */}
            <TeamMember name="favian mokaya" />
          </div>
          <div>
            {/** 6 */}
            <TeamMember name="aketch atem" />
          </div>
        </div>
      </div>

      </div>
      
    </main>
  );
}
