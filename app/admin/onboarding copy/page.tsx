"use client"
import React, { useState } from 'react';
import {Step1, Step2, Step3} from "@/components/farmer/FarmerOnboardingSteps";
import { createClient } from '@supabase/supabase-js';

const Page = () => {  
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL as string, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string)
  const [step, setStep] = useState(0);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone_number: "",
    dob: "",
    national_id: "",
    kra_pin: "",
    postal_address: "",
    milk_collection: "",
    no_of_cows: "",
  });
  
  const handleFormDataChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submit = async () => {
    const error = await supabase
    .from("")
    .insert(formData)
  };

  
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center text-xl w-full max-w-md">
        <div className="my-auto text-center">
          {step === 0 && 
          <div>
            <p className='py-4'><span className='text-4xl mb-4 font-bold'>Welcome to DairyLink.</span><br /></p>
            <p className='py-4 mb-4'>DairyLink connects dairy farmers and simplifies success</p>
            <div onClick={nextStep} className="p-3 bg-green-500 rounded-md text-center text-xl font-bold cursor-pointer">Get started</div>
          </div>}

          <div>
            {step === 1 && <Step1 formData={formData} handleFormDataChange={handleFormDataChange} nextStep={nextStep} />}
            {step === 2 && <Step2 formData={formData} handleFormDataChange={handleFormDataChange} prevStep={prevStep} nextStep={nextStep} />}
            {step === 3 && <Step3 formData={formData} handleFormDataChange={handleFormDataChange} prevStep={prevStep} submit={submit} />}
            {step !== 0 && <div>Step {step} of 3</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
