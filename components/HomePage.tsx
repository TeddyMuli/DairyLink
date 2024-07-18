"use client";
import Challenges from "@/components/Challenges";
import InfoFlipCard from "@/components/InfoFlipCard";
import TeamMember from "@/components/TeamMember";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import AOS from "aos";
import "aos/dist/aos.css";
import Autoplay from "embla-carousel-autoplay";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
    img: "/assets/images/team/ted2.jpg",
    role: "Frontend Engineer",
  },
  {
    name: "Alfred Warui",
    link: "https://www.linkedin.com/in/alfred-kahenya-07a309229/",
    img: "/assets/images/team/alfred.jpg",
    role: "Software Engineer",
  },
  {
    name: "Samuel Ruoti",
    link: "#",
    img: "/assets/images/team/sam.jpg",
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
    img: "/assets/images/team/aketch.jpg",
    role: "Machine Learning Engineer",
  },
];

export default function Home({ user } : { user: any }) {
  const [isArrowVisible, setIsArrowVisible] = useState<boolean>(false);
  const router = useRouter();
  const userData = JSON.parse(user?.value)

  const [teamsData,setTeamsData] = useState<{
    name: string;
    link: string;
    img: string;
    role: string;
  }[]>(team);
  const [showAll, setShowAll] = useState<boolean>(false);

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      anchorPlacement: "top-center",
      easing: "ease-in-out",
    });

    handleShowFewTeamMembers();
  }, []);

  useEffect(() => {
    function handleUserSignedIn () {
      if (userData) {
        if (userData?.user_metadata?.accountType === "Farmer") {
          router.push("/app")
        } else if (userData?.user_metadata?.accountType === "Cooperative") {
          router.push("/admin")
        } else {
          return
        }
      } else {
        return
      }
    }
  
    handleUserSignedIn();
  }, [userData]);

  useEffect(() => {
    if(showAll){
      handleShowAllTeamMembers();
    } else{
      handleShowFewTeamMembers();
    }
  }, [showAll]);

  const handleShowFewTeamMembers = () => {
    setTeamsData(team.slice(0, 4));
  }

  const handleShowAllTeamMembers = () => {
    setTeamsData(team);
  }

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsArrowVisible(true) : setIsArrowVisible(false)
    }
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, []);

  const handleScrollToTop = () => {
    isArrowVisible &&
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
  }

  return (
    <div className="">
      <button
      className={`fixed bottom-4 right-4 text-green-500 border-2 border-green-500 rounded-full p-2 outline-none transition-opacity duration-200 ${
        isArrowVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleScrollToTop}
    >
      <ChevronUp className="h-6 w-6" />
    </button>
      <div
        className="relative w-full h-96 md:h-[600px] lg:h-[800px] flex flex-col justify-center items-center "
      >
        <Image
          src={`/assets/images/cowlandscape.jpg`}
          alt="cow"
          fill
          objectFit="cover"
        />
        <div className="absolute inset-0 text-white flex flex-col justify-center items-center z-10">
          <Carousel
            plugins={[plugin.current]}
            className="w-3/4"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="flex">
              <CarouselItem>
                <div className="flex flex-col items-center justify-center text-center tracking-tighter font-bold">
                  <p className="text-md md:text-4xl">CONNECTING</p>
                  <p className="text-2xl md:text-8xl">DAIRY FARMERS</p>
                  <p className="text-md md:text-4xl">AND SIMPLIFYING SUCCESS</p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="flex flex-col items-center justify-center text-center tracking-tighter font-bold">
                  <p className="text-md md:text-4xl">CONNECTING</p>
                  <p className="text-2xl md:text-8xl">DAIRY FARMERS</p>
                  <p className="text-md md:text-4xl">
                    AND SIMPLIFYING OPERATIONS
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="md:w-16 md:h-16" />
            <CarouselNext className="md:w-16 md:h-16" />
          </Carousel>
        </div>
      </div>
      <div className="mt-8">
        <div className="grid justify-center items-center gap-10 border-b border-white mb-8">
          <p className="text-center text-4xl md:text-6xl font-bold">
            Current challenges
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-1 px-4 gap-8">
            <Challenges
              number="01"
              heading="Computerized systems"
              description="Lack of Computerized systems for efficient management of member data and services crucial for their operations."
            />
            <Challenges
              number="02"
              heading="Legacy Systems"
              description="Dairy Cooperatives often face 
              challenges in managing member applications leading to delays and inefficiencies. These challenges
              include use of basic software solutions like excel spreadsheets."
            />

            <Challenges
              number="03"
              heading="Lack of Farmer support"
              description='"The Farmers were also faced with the challenge of lack of
                access to market information, resource constraints, limited
                access to banking services as well as little farmer education."
                - Research by Anne W. Wainana on the challenges faced by Dairy
                Farmers in Kiambu County at USIU'
            />
          </div>
        </div>
        <div
          id="about"
          className="relative bg-[url(/assets/images/about-us-bg.jpeg)] bg-cover bg-center bg-no-repeat p-8 text-white"
          // data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-black opacity-60" />
          <h1 className="text-6xl mb-8 text-center font-bold z-10 relative">
            About Us
          </h1>
          <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-4 text-xl items-center relative z-10">
            <div className="flex flex-col-reverse items-center p-2 rounded-lg m-2 gap-2">
              <p className="font-medium text-center">
                Our team consists of experienced professionals <br /> who deal
                with the creation of data management tools and application
              </p>
              <Image
                src={"/assets/images/cow.png"}
                alt="cow"
                width={115}
                height={115}
                className="mt-4 filter invert brightness-0"
              />
            </div>
            <div className="flex flex-col-reverse items-center p-2 rounded-lg m-2 gap-2">
              <p className="font-medium text-center">
                We attach great importance to customer satisfaction
              </p>
              <Image
                src={"/assets/images/service.png"}
                alt="service"
                width={115}
                height={115}
                className="mt-8 filter invert brightness-0"
              />
            </div>
            <div className="flex flex-col-reverse items-center p-2 rounded-lg m-2 gap-2">
              <p className="font-medium text-center">
                We value quality of service, security and a seamless user
                experience
              </p>
              <Image
                src={"/assets/images/reliability.png"}
                alt="reliabilty"
                width={115}
                height={115}
                className="mt-8 filter invert brightness-0"
              />
            </div>
          </div>
        </div>
        <div id="features" className="mt-10 p-2 border-t border-white mx-6">
          <p className="text-5xl mb-12 text-center mt-4 font-bold text-black">
            Discover the features of our upcoming App
          </p>
          <div
            className="grid grid-cols-1 grid-rows-4 md:grid-cols-4 md:grid-rows-1 gap-3 text-xl"
            // data-aos="fade-up"
          >
            <InfoFlipCard
              bgImage="farmer.jpg"
              frontContent={
                <p className="relative z-20 my-2 text-white text-2xl font-bold">
                  Member Profile
                </p>
              }
              backContent={
                <p className="text-center relative z-20">
                  Enable customization & personalization
                </p>
              }
            />
            <InfoFlipCard
              bgImage="dashboard.jpg"
              frontContent={
                <p className="relative z-20 my-2 text-white text-2xl font-bold">Interactive Dashboard</p>
              }
              backContent={
                <p className="text-center">
                  Able to view graphical reports on milk, monthly payout slips
                  and agro vet statements.
                </p>
              }
            />
            <InfoFlipCard
              bgImage="news.jpg"
              frontContent={
                <p className="relative z-20 my-2 text-white text-2xl font-bold">Cooperative News</p>
              }
              backContent={
                <p className="text-center">
                  Ability to view updates and infromation such as e-learning
                  materials
                </p>
              }
            />
            <InfoFlipCard
              bgImage="other_services.jpg"
              frontContent={
                <p className="relative z-20 my-2 text-white text-2xl font-bold">Other Services</p>
              }
              backContent={
                <p className="text-center">
                  Requests for feeds, chemicals, fertilixers, A.I services,
                  training and farm visit, soft loans, lodge & view complaints
                </p>
              }
            />
          </div>
        </div>

        <div id="team" className="py-6 mt-10">
          <h1 className="text-6xl text-center py-4 mb-4 font-bold tracking-tight">
            Meet the team
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4 mx-8 justify-center place-items-center mt-6">
            {teamsData.map((item, index) => {
              return (
                  <TeamMember
                    link={item.link}
                    name={item.name}
                    img_src={item.img}
                    role={item.role}
                    key={item.name}
                  />
              );
            })}
          </div>
          {!showAll && <p onClick={()=>setShowAll(
            prevState => !prevState
          )} className="capitalize text-center hover:cursor-pointer hover:text-blue-600 text-4xl font-bold text-blue-500 underline underline-offset-4">
            View the entire team
          </p>}
        </div>

      </div>
    </div>
  );
}
