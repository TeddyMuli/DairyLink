"use client";

import Image from "next/image";
import React, { useState } from "react";
import { providers } from "@/constants";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";
import { z } from 'zod';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signInWithProvider } from "../action";

const validationSchema = z
.object({
  full_name: z.string().min(4, "Username must be atleast 4 characters long"),
  email: z.string().email("Invalid email address").min(1, "This field is required!"),
  password: z.string().min(6, "Password must be 6 characters long!"),
  confirmPassword: z.string(),
  accountType: z.enum(['Farmer', 'Cooperative'], { message: "Select an account type!" }),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match!",
  path: ["confirmPassword"],
});

export default function Page() {
  const router = useRouter();
  const [seePassword, setSeePassword] = useState(false);
  const { 
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
      accountType: ""
    }
  });

  const backgroundImageStyle = {
    backgroundImage: "url('/assets/dairy_cow.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '180vh',
    width: '100%',
  };
  
  const radioStyles = "flex gap-4 border-2 border-black/40 rounded-xl p-4 hover:border-green-500 checked:border-green-500 cursor-pointer";
  const linkStyles = "text-blue-400";

  const onSubmit = async () => {
    const formData = getValues();

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      reset();
      toast.info("Confirm Email!")
      router.push("/auth/login")
    } else {
      toast.error("Error signing up!")
    }
  };

  return (
    <div className="relative w-full h-screen xl:h-[180vh] justify-center items-center bg-green-500 xl:bg-none">
      <Image 
        src={"/assets/dairy_cow.jpg"}
        fill
        style={{objectFit: "cover"}}
        className="hidden xl:block"
        alt="dairy cow"
      />
      <div className="absolute container mx-auto grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 text-xl">
        <div className="hidden xl:flex flex-col justify-center items-center text-6xl text-left bg-white bg-opacity-30 w-[500px] rounded-xl ml-8">
          <h1 className="font-bold mt-[100px]">DairyLink</h1>
          <div className="my-auto">
            <p className="text-green-800 font-medium">Connecting<br />dairy farmers<br />and simplifying<br /><span className="font-extrabold">success</span></p>
          </div>
        </div>
        <div className="bg-white rounded-xl m-8 p-4">
            <h1 className="block xl:hidden text-3xl font-bold text-accent text-slate-900 text-center">
              Dairy<span className="text-green-600">Link</span>
            </h1>          
            <h1 className="text-center text-xl xl:text-5xl font-extrabold py-4">Create your account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="px-8">
              <div className="flex flex-col">
                <label htmlFor="full_name" className="text-lg p-2">User name</label>
                <input
                  id="full_name"
                  type="text"
                  {...register("full_name")}
                  placeholder="Enter your Username"
                  className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none"
                />
                {errors.full_name && <div className="text-red-500 text-sm font-medium">{errors.full_name.message}</div>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg p-2">Email address</label>
                <input
                  id="email"
                  type="text"
                  {...register("email")}
                  placeholder="Email address"
                  className="p-4 border-2 border-black/40 rounded-lg focus:border-green-500 outline-none"
                />
                {errors.email && <div className="text-red-500 text-sm font-medium">{errors.email.message}</div>}
              </div>
              {/** Radio Buttons  */}
              <div className="py-4">
                <label className="text-lg">Account Type</label>
              </div>
              <div className="flex flex-col justify-between gap-4 mx-auto cursor-pointer">
                <Controller
                  name="accountType"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <RadioGroup value={value} onValueChange={(newValue) => onChange(newValue)}>
                      <label htmlFor="Farmer" className={[radioStyles, value === "Farmer" ? "border-green-500" : ""].join(" ")}>
                        <RadioGroupItem value="Farmer" id="Farmer" />
                        <p>Farmer</p>
                      </label>
                      <label htmlFor="Cooperative" className={[radioStyles, value === "Cooperative" ? "border-green-500" : ""].join(" ")}>
                        <RadioGroupItem value="Cooperative" id="Cooperative" />
                        <p>Cooperative</p>
                      </label>
                    </RadioGroup>
                  )}
                />
                {errors.accountType && <div className="text-red-500 text-sm font-medium">{errors.accountType.message}</div>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-lg p-2">New Password</label>
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
              <div className="flex flex-col">
                <label htmlFor="confirmPassword" className="text-lg p-2">Confirm Password</label>
                <div className="flex gap-4 border-2 border-black/40 items-center group focus-within:border-green-500 rounded-lg w-full">
                  <input
                    id="confirmPassword"
                    type={seePassword ? "text" : "password"}
                    {...register("confirmPassword")}
                    className="p-4 rounded-lg outline-none w-full"
                    placeholder="Confirm Password"
                  />
                  <div className="flex ml-auto mr-4">
                    {seePassword ? (
                      <Eye onClick={() => setSeePassword(false)} className="cursor-pointer" />
                    ): (
                      <EyeOff onClick={() => setSeePassword(true)} className="cursor-pointer" />
                    )}
                  </div>
                </div>
                {errors.confirmPassword && <div className="text-red-500 text-sm font-medium">{errors.confirmPassword.message}</div>}
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
              <div>
                <p
                  className="text-sm pb-4"
                >
                  By signing up you agree to our, 
                  <Link 
                    className={linkStyles} 
                    href="/privacypolicy"
                  >privacy policy</Link>, 
                  <Link 
                    className={linkStyles}
                    href="/terms">terms of service</Link> 
                    and <Link 
                      className={linkStyles} 
                      href="/cookies"
                      >
                    cookie policy
                  </Link>
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button type="submit" disabled={!isValid || !isDirty} className={`py-4 bg-blue-600 cursor-pointer disabled:bg-blue-400 disabled:cursor-not-allowed font-bold text-2xl rounded-lg text-white w-[500px]`}>Sign Up</button>
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
                <div className="flex flex-row gap-[100px] pt-2 pb-8 justify-center items-center">
                  {providers.map((provider, index) => {
                    return (
                      <div key={index} className="cursor-pointer p-2 rounded-lg">
                        <Image
                          key={index}
                          src={provider.src}
                          alt={provider.alt}
                          width={50}
                          height={50}
                          className="cursor-pointer"
                          onClick={() => signInWithProvider(provider.name)}
                        />
                      </div>
                    )
                  })}
                </div>
            </form>
        </div>
      </div>
    </div>
  );
}
