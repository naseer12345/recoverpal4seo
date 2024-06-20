'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useMyContext } from '@/context/context';
import { useEffect, useState } from "react";
export default function MenuSheet () {
  
  // @ts-ignore
  const {contextData, setContextData} = useMyContext();
// const imgUrl = contextData.customerInfo.imgURL ? contextData.customerInfo.imgURL : "https://github.com/shadcn.
    return (

        <Sheet  >
  <SheetTrigger className='rounded-full bg-black text-2xl text-white px-4'>=</SheetTrigger>
  <SheetContent className='max-w-lg flex flex-col justify-between' >
    <div >
    <div className='flex gap-2'>
   
    <Avatar>
    <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

<div className="grid gap-1">
  <p className="text-sm font-medium leading-none">{contextData.customerInfo.Fname + " " + contextData.customerInfo.Lname }</p>
<p className="text-sm text-muted-foreground">{contextData.customerInfo.email}</p>
</div>

</div>
<div className='mt-10 flex flex-col gap-4 '>
    <Button variant={'default'} onClick={()=>{
      console.log(contextData)
    }} className='bg-gray-300 text-black hover:text-white'> Previous orders</Button>
    <Button variant={'default'} className='bg-gray-300 text-black hover:text-white'> Contact</Button>
  
  
  </div>   
</div>
  </SheetContent>
      </Sheet>

    );
  };
  

