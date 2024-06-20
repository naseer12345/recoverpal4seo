import React,{useEffect, useState} from "react"
import { useMyContext } from '@/context/context';
import { useRouter } from 'next/navigation';


export default function Choices(){

  const [selectedService, setSelectedService] = useState(null)
  const [selectedRecovey, setSelectedRecovery] = useState(false)
  const [recoveryVehicleType, setRecoveryVehicleType] = useState(null)
  const router = useRouter()










 
  





  // @ts-ignore 
  let stuckLabel;
  // @ts-ignore
  let recoveryLabel; 
  // @ts-ignore
    let jumpstartLabel;
 useEffect(()=>{
     stuckLabel = document.getElementById('stuck')
     recoveryLabel = document.getElementById('recovery')
     jumpstartLabel = document.getElementById('jumpstart')
  },[])
 
  //@ts-ignore
  const { contextData, setContextData} = useMyContext();
  useEffect(()=>{
    
    if(selectedService === 'recovery'){
      // @ts-ignore
      stuckLabel?.classList.remove('p-4')
      // @ts-ignore
      stuckLabel?.classList.remove('rounded-lg')
      // @ts-ignore
      recoveryLabel?.classList.remove('p-4')
      // @ts-ignore
      recoveryLabel?.classList.remove('rounded-lg')
      // @ts-ignore
      jumpstartLabel?.classList.remove('p-4')
      // @ts-ignore
      jumpstartLabel?.classList.remove('rounded-lg')
      // @ts-ignore
      stuckLabel?.classList.add('p-2')
      // @ts-ignore
      stuckLabel?.classList.add('rounded-full')
      // @ts-ignore
      recoveryLabel?.classList.add('p-2')
      // @ts-ignore
      recoveryLabel?.classList.add('rounded-full')
      // @ts-ignore
      jumpstartLabel?.classList.add('p-2')
      // @ts-ignore
      jumpstartLabel?.classList.add('rounded-full')
      setSelectedRecovery(true)
    }else{
      // @ts-ignore
      if(!stuckLabel?.classList.contains('p-4')){
        // @ts-ignore
        stuckLabel?.classList.add('p-4')
        // @ts-ignore
      stuckLabel?.classList.add('rounded-lg')
      // @ts-ignore
      recoveryLabel?.classList.add('p-4')
      // @ts-ignore
      recoveryLabel?.classList.add('rounded-lg')
      // @ts-ignore
      jumpstartLabel?.classList.add('p-4')
      // @ts-ignore
      jumpstartLabel?.classList.add('rounded-lg')
      }
      setSelectedRecovery(false)
    }
//@ts-ignore
    setContextData(prevData => ({
      ...prevData,
      order: {
        ...prevData.order,
        selectedService: [selectedService, null]
      }
    }));

      console.log(contextData)

  },[selectedService, setSelectedService])






//@ts-ignore
  function handleServiceClick(service){
    if(service == 'car'){
      //@ts-ignore
      setContextData(prevData => ({
        ...prevData,
        order: {
          ...prevData.order,
          selectedService: ['recovery', 'car']
        }
      }));
  

      setRecoveryVehicleType(service)
    }else if(service == 'motorcycle'){
      //@ts-ignore
      setContextData(prevData => ({
        ...prevData,
        order: {
          ...prevData.order,
          selectedService: ['recovery', 'motorcycle']
        }
      }));
      setRecoveryVehicleType(service)
    }else{
      setSelectedService(service)
    }
  }
    return ( 
    <fieldset className="grid grid-rows-2 grid-cols-3  w-full ">
     <legend className="sr-only">Delivery</legend>
  
    <div onClick={()=>{handleServiceClick('recovery'); }} className=' max-w-[8rem]'>
      <label
        htmlFor="DeliveryStandard"
        id="recovery"
        className="flex  cursor-pointer justify-between gap-2 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 transition-all duration-300 ease-in-out"
      >
        <div>
          <p className="text-gray-700">Recovery</p>
  
          
        </div>
  
        <input
          type="radio"
          name="DeliveryOption"
          value="DeliveryStandard"
          id="DeliveryStandard"
          className="size-5 border-gray-300 text-blue-500"
          
        />
      </label>
    </div>      
   
    <div onClick={()=>{
      //@ts-ignore
      setSelectedService('jumpstart')}} className='max-w-[8rem]'>
      <label
        htmlFor="DeliveryPriority"
        id="jumpstart"
        className="flex cursor-pointer justify-between gap-1  rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 transition-all duration-300 ease-in-out"
      >
        <div>
          <p className="text-gray-700">Jumpstart</p>
  
        </div>
  
        <input
          type="radio"
          name="DeliveryOption"
          value="DeliveryPriority"
          id="DeliveryPriority"
          className="size-5 border-gray-300 text-blue-500"
        />
      </label>
    </div>
    <div onClick={()=>{
      //@ts-ignore
      setSelectedService('stuck'); checkUserLoggedIn()}}  className="max-w-[8rem]">
        <label
          htmlFor="Stuck"
          id='stuck'
          className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 transition-all duration-300 ease-in-out"
        >
          <div>
            <p className="text-gray-700">Transport</p>
          </div>
          <input
            type="radio"
            name="DeliveryOption"
            value="Stuck"
            id="Stuck"
            className="size-5 border-gray-300 text-blue-500"
          />
        </label>
      </div>
      {selectedRecovey ? <div className="mt-2 grid grid-rows-1 grid-flow-col gap-4 w-full">
      <div onClick={()=>{handleServiceClick('car')}} className="max-w-[8rem]">
        <label
          htmlFor="Car"
          className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500 "
        >
          <div>
            <p className="text-gray-700">Car</p>
          </div>
          <input
            type="radio"
            name="VehicleType"
            value="Car"
            id="Car"
            className="size-5 border-gray-300 text-blue-500"
          />
        </label>
      </div>
      <div onClick={()=>{handleServiceClick('motorcycle')}} className="max-w-[8rem]">
        <label
          htmlFor="Motorcycle"
          className="flex cursor-pointer justify-between gap-4 rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 has-[:checked]:border-blue-500 has-[:checked]:ring-1 has-[:checked]:ring-blue-500"
        >
          <div>
            <p className="text-gray-700">Motorcycle</p>
          </div>
          <input
            type="radio"
            name="VehicleType"
            value="Motorcycle"
            id="Motorcycle"
            className="size-5 border-gray-300 text-blue-500"
          />
        </label>
      </div>
  

      </div>  : null}
       
  </fieldset>
  )
}