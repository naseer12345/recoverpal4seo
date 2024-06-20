'use client'
import React from 'react';
import homepageImage from './homepage.png';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Choices from '@/components/choices';
import AboutAndFAQ from '@/components/aboutAndFaq';
import { useRouter } from 'next/navigation';
import { useMyContext } from '@/context/context';





export default function Home() {
  const router = useRouter();
  //@ts-ignore
  const { contextData, setContextData} = useMyContext();

  function handleClick() {
    if(contextData.order.selectedService[0] == 'recovery' && contextData.order.selectedService[1] == null ){
      alert("Please select recovery for car or motorcycle")
    }else{
      router.push('/map');
    }

    
  }

  return (
   
      <div className="bg-[#F9F7F7] min-h-screen flex flex-col">
        <div className="w-[70%] xs:w-full mx-auto pt-5 px-2 flex justify-around p-4">
          <h3 className="text-black xs:text-lg text-3xl text-bold w-full">
            Recover<span className="text-amber-500">Pal</span>
          </h3>
          <Button variant="ghost" onClick={()=>{router.push('/clogin');}} className='rounded-full hover:bg-gray-200'>Log in</Button>
          <Button variant="outline" onClick={()=>{router.push('/csignup');}} className='rounded-full bg-black text-white'>Sign up</Button>
        </div>
        <div className="max-w-5xl mx-auto flex-1 flex xs:flex-col flex-row items-center gap-2 justify-center overflow-hidden">
          <div>
            <h1 className="scroll-m-20 ml-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Recover anywhere with RecoverPal
            </h1>
            <p className="text-sm ml-2 max-w-[20rem] text-muted-foreground ">
              Request recovery, Sit back, watch your vehicle live GPS location for peace of mind
            </p>
            <div className="flex flex-col items-start mt-5">
              <Choices />          
              <Button className='min-w-24 my-4 mx-4' onClick={handleClick}>
                Click to see prices
              </Button>
            </div>
          </div>
          <Image src={homepageImage} alt="Homepage" className="w-1/2 xs:w-full xs:relative  rounded-xl" />
        </div>
        <div className='self-center max-w-4xl w-full'>
          <AboutAndFAQ />
        </div>
      </div>
    
  );
}
