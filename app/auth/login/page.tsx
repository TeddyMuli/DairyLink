"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { providers } from '@/constants';
import { toast } from 'react-toastify';
import { signInWithProvider } from '../action';
import { Eye, EyeOff } from "lucide-react";
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Checkbox } from '@/components/ui/checkbox';

const validationSchema = z
.object({
  email: z.string().email("Invalid email address").min(1, "Required"),
  password: z.string().min(6, "Required")
})

export default function Page() {
  const [seePassword, setSeePassword] = useState(false);
  const router = useRouter();
  const { 
    control,
    reset,
    formState: { isValid, isDirty, errors },
    register,
    handleSubmit,
    getValues
   } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false
    }
  })

  const onSubmit = async () => {
    try {
      const formData = getValues();

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      
      if (response.ok) {
          console.log("Login Response: ", result)
          toast.success("Logged In!", {closeOnClick: true})
          router.push('/');
      } else {
        toast.error("Error logging in!", {closeOnClick: true})
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  };

  const backgroundImageStyle = {
    backgroundImage: "url('/assets/dairy_cow.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '130vh',
    width: '100%',
  };

  return (
    <div style={backgroundImageStyle}>
      <div className="container mx-auto grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 text-xl pt-4">
        <div className="flex flex-col justify-center items-center text-6xl text-left bg-white bg-opacity-30 w-[500px] rounded-xl ml-8">
          <h1 className="font-bold mt-[100px]">DairyLink</h1>
          <div className="my-auto">
            <p className="text-green-800 font-medium">
              Connecting<br />dairy farmers<br />and simplifying<br />
              <span className="font-extrabold">success</span>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl m-8 p-8">
          <h1 className="text-center text-6xl font-extrabold p-4">Welcome</h1>
          <p className="text-center font-semibold pb-4">Create an account or login to access DairyLink</p>
          <form className="px-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xl p-2">Email address</label>
              <input
                id="email"
                type="text"
                {...register("email")}
                placeholder="Email address"
                className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none"
              />
              {errors.email && <div className="text-red-500 text-sm font-medium">{errors.email.message}</div>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="password" className="text-xl p-2">Enter Password</label>
                <div className="flex gap-4 border-2 border-black/40 items-center group focus-within:border-green-500 rounded-lg w-full">
                  <input
                    id="password"
                    type={seePassword ? "text" : "password"}
                    {...register("password")}
                    className="p-4 outline-none rounded-lg w-full"
                    placeholder="Enter new Password"
                  />
                  <div className="flex ml-auto mr-4">
                    {seePassword ? (
                      <Eye onClick={() => setSeePassword(false)} className="cursor-pointer" />
                    ): (
                      <EyeOff onClick={() => setSeePassword(true)} className="cursor-pointer" />
                    )}
                  </div>
                </div>
                {errors.password && <div className="text-red-500 text-sm font-medium">{errors.password.message}</div>}
            </div>
            <div className="flex gap-4 py-4">
              <Controller
                name="rememberMe"
                control={control}
                render={({ field: {onChange, value} }) => (
                  <>
                    <Checkbox className="cursor-pointer" checked={value} onCheckedChange={(newValue) => onChange(newValue)} id="rememberMe" />
                    <p>Remember me</p>
                  </>
                )}
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <button type="submit" disabled={!isValid || !isDirty} className="py-4 bg-blue-600 cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed font-bold text-2xl rounded-lg text-white w-[500px]">Log In</button>
            </div>
          </form>
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
              {providers.map((provider, index) => (
                <Image
                  key={index}
                  src={provider.src}
                  alt={provider.alt}
                  width={50}
                  height={50}
                  className="cursor-pointer"
                  onClick={() => signInWithProvider(provider.name)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
