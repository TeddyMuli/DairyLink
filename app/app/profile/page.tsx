import Image from 'next/image';
import React from 'react';

const Page = () => {
  return (
    <div className='text-black'>
      <p className='text-3xl font-bold w-full'>Profile</p>
      <div className='grid gap-4 grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1 my-4'>
        <div className='rounded-xl flex flex-col gap-4'>
          <div className='bg-white p-4 rounded-xl flex flex-col gap-3'>
            <Image
              src="/assets/images/team.png"
              alt="profile picture"
              width={70}
              height={70}
              className='rounded-full'
            />
            <p className='text-xl font-semibold'>Your photo</p>
            <p className='font-medium text-lg text-customDarkGrey'>This will be displayed on your profile</p>
            <div className='flex gap-4 text-lg font-semibold'>
              <p className='px-3 py-2 border-2 border-black rounded-lg cursor-pointer'>Upload New</p>
              <p className='px-3 py-2 bg-blue-500 text-white rounded-lg cursor-pointer'>Save</p>
            </div>
          </div>

          <div className='p-4 bg-white rounded-xl flex flex-col gap-3'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="username" className='font-semibold text-lg'>Username</label>
              <input type="text" name="username" id='username' placeholder='Username' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl'  />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="username" className='font-semibold text-lg'>First Name</label>
              <input type="text" name="username" id='username' placeholder='Username' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl'  />
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor="username" className='font-semibold text-lg'>Last Name</label>
              <input type="text" name="username" id='username' placeholder='Username' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl'  />
            </div>
          </div>
        </div>
        <div className='bg-white p-2 rounded-xl'>
          <div className='p-3 bg-white rounded-xl flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
              <label htmlFor="username" className='font-semibold text-lg'>Phone Number</label>
              <input type="text" name="username" id='username' placeholder='Username' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl'  />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="username" className='font-semibold text-lg'>ID Number</label>
              <input type="text" name="username" id='username' placeholder='Username' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl'  />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="username" className='font-semibold text-lg'>Number of cows</label>
              <input type="text" name="username" id='username' placeholder='Username' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl'  />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="username" className='font-semibold text-lg'>Date of birth</label>
              <input type="text" name="username" id='username' placeholder='Username' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl'  />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="username" className='font-semibold text-lg'>Next of Kin (name)</label>
              <input type="text" name="username" id='username' placeholder='Username' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl'  />
            </div>

            <div className='flex flex-col gap-1'>
              <label htmlFor="username" className='font-semibold text-lg'>Next of Kin (phone)</label>
              <input type="text" name="username" id='username' placeholder='Username' className='p-3 border-[1.5px] w-[80%] border-black rounded-xl'  />
            </div>
          </div>
        </div>
      </div>

      <button className='p-3 bg-blue-500 text-white text-lg font-semibold rounded-xl'>Submit</button>
    </div>
  );
}

export default Page;
