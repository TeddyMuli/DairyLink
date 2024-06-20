"use client";
import InfoFlipCard from "@/components/InfoFlipCard";
import TeamMember from "@/components/TeamMember";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import { supabase } from "@/lib/supabase";
import { Session } from "@supabase/auth-helpers-nextjs";
import AOS from "aos";
import "aos/dist/aos.css";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Dr. Nderu",
    link: "https://www.linkedin.com/in/dr-lawrence-nderu/",
    img: "/assets/images/team/nderu.jpeg",
    role: "Mentor",
  },
  {
    name: "Ian Karanja",
    link: "https://www.linkedin.com/in/ian-karanja-00027724b/",
    img: "/assets/images/team/ian.jpg",
    role: "Product Manager",
  },
  {
    name: "Teddy Muli",
    link: "https://www.linkedin.com/in/teddymuli/",
    img: "/team/ted2.jpg",
    role: "Frontend Engineer",
  },
  {
    name: "Alfred Warui",
    link: "https://www.linkedin.com/in/alfred-kahenya-07a309229/",
    img: "/assets/images/team/alfred.jpg",
    role: "Data Analyst",
  },
  {
    name: "Samuel Ruoti",
    link: "#",
    img: "/team/sam.jpg",
    role: "Backend Engineer",
  },
  {
    name: "Favian Mokaya",
    link: "https://www.linkedin.com/in/favianmokaya/",
    img: "/assets/images/team/favian.jpg",
    role: "UI/UX designer",
  },
  {
    name: "Aketch Atem",
    link: "https://www.linkedin.com/in/akech-dau-atem-723455222/",
    img: "/team/aketch.jpg",
    role: "Machine Learning Engineer",
  },
];

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const plugin = useRef(Autoplay({ delay: 1000, stopOnInteraction: true }));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-center",
      easing: "ease-in-out",
    });

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
        {/* <div className="bg-customGreen text-white p-10">
          <div className="flex flex-col mt-24 justify-center items-center">
            <h1 className=" text-xl mb-4 text-center">
              YOUR TRUSTED PARTNER IN
            </h1>
            <TypeAnimation
              className="text-4xl lg:text-6xl max-w-[400px] lg:max-w-[800px] text-center"
              sequence={[
                "CONNECTING DAIRY FARMERS AND SIMPLIFYING SUCCESS",
                1000,
                "CONNECTING DAIRY FARMERS AND SIMPLIFYING OPERATIONS",
                1000,
              ]}
              repeat={Infinity}
              speed={50}
              cursor={false}
            />
          </div>
          <div className="flex flex-col items-center">
            <Link
              href="/#features"
              className="mt-4 mb-8 px-4 py-2 bg-black text-white w-48 text-lg text-center rounded-lg hover:bg-gray-800"
            >
              View Features
            </Link>
          </div>
        </div> */}
        <div className="flex justify-center items-center">
          {/** 
          <div style={{ filter: "brightness(50%)" }}>
            <Image src={`/money.jpg`} alt="cow" width={200} height={200} />
          </div>
          */}
          <div style={{ position: "relative", width: "100%", height: "80vh" }}>
            <Image
              src={`/assets/images/cowlandscape.jpg`}
              alt="cow"
              fill
              objectFit="cover"
            />
            <div className="absolute inset-0 text-white flex flex-col justify-center items-center z-10">
              {/* <div className="flex flex-col mt-24 justify-center items-center">
                <h1 className=" text-xl mb-4 text-center">
                  YOUR TRUSTED PARTNER IN
                </h1>
                <TypeAnimation
                  className="text-4xl lg:text-6xl max-w-[400px] lg:max-w-[800px] text-center"
                  sequence={[
                    "CONNECTING DAIRY FARMERS AND SIMPLIFYING SUCCESS",
                    1000,
                    "CONNECTING DAIRY FARMERS AND SIMPLIFYING OPERATIONS",
                    1000,
                  ]}
                  repeat={Infinity}
                  speed={50}
                  cursor={false}
                />
              </div> */}
              <Carousel
                plugins={[plugin.current]}
                className="w-3/4"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent className="flex">
                  <CarouselItem>
                    <div className="flex flex-col items-center justify-center text-center tracking-tighter font-bold">
                      <p className="text-4xl">CONNECTING</p>
                      <p className="text-8xl">DAIRY FARMERS</p>
                      <p className="text-4xl">AND SIMPLIFYING SUCCESS</p>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex flex-col items-center justify-center text-center tracking-tighter font-bold">
                      <p className="text-4xl">CONNECTING</p>
                      <p className="text-8xl">DAIRY FARMERS</p>
                      <p className="text-4xl">AND SIMPLIFYING OPERATIONS</p>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="w-16 h-16" />
                <CarouselNext className="w-16 h-16" />
              </Carousel>
            </div>
          </div>
          {/** 
          <div style={{ filter: "brightness(50%)" }}>
            <Image src={`/dairy_cow.jpg`} alt="cow" width={200} height={200} />
          </div>
          */}
        </div>
      </div>
      <div className="bg-customGreen -mt-12 text-white py-16">
        {/** challenges */}
        <div className="grid justify-center items-center gap-8 border-b border-white mb-8">
          <p className="text-center text-6xl">Current challenges</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 px-4">
            <div
              className="max-w-[400px] border-b-2 lg:border-0 mb-2 "
              data-aos="fade-up"
            >
              <h3 className="text-center text-xl font-bold">01</h3>
              <h3 className="py-4 text-center text-2xl font-semibold">
                Computerized systems
              </h3>
              <p className="text-center text-xl py-3">
                Lack of Computerized systems for efficient management of member
                data and services crucial for their operations.{" "}
              </p>
            </div>
            <div
              className="max-w-[400px] border-b-2 lg:border-0 mb-2"
              data-aos="fade-up"
            >
              <h3 className="text-center text-xl font-bold">02</h3>
              <h3 className="py-4 text-center text-2xl font-semibold">
                Legacy Systems
              </h3>
              <p className="text-center text-xl py-3">
                Dairy Cooperatives often face challenges in managing member
                applications leading to delays and inefficiencies. These
                challenges include use of basic software solutions like excel
                spreadsheets.
              </p>
            </div>
            <div className="max-w-[400px] mb-8" data-aos="fade-up">
              <h3 className="text-center text-xl font-bold">03</h3>
              <h3 className="py-4 text-center text-2xl font-semibold">
                Lack of Farmer support
              </h3>
              <p className="text-center text-xl py-3">
                "The Farmers were also faced with the challenge of lack of
                access to market information, resource constraints, limkited
                access to banking services as well as little farmer education. "
                - Research by Anne W. Wainana on the challenges faced by Dairy
                Farmer's in Kiambu County at USIU
              </p>
            </div>
          </div>
        </div>
        <div
          id="about"
          className="justify-center place-items-center"
          data-aos="fade-up"
        >
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
          <div className="text-right">
            <p className="text-4xl mb-12 mt-4">
              DISCOVER THE FEATURES
              <br /> OF OUR UPCOMING APP
            </p>
          </div>
          <div
            className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-3 text-xl"
            data-aos="fade-up"
          >
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
                  <p className="my-2 font-medium">Interactive Dashboard</p>
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
          <h1 className="text-6xl text-center py-4 mb-4 text-white">
            Meet the team
          </h1>
          <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-4 mx-8 justify-center place-items-center mt-6">
            {team.map((item, index) => {
              return (
                <div key={index}>
                  <TeamMember
                    link={item.link}
                    name={item.name}
                    img_src={item.img}
                    role={item.role}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
