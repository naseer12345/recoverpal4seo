'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useMyContext } from '@/context/context';
import DefaultMap from '@/components/defaultMap';
import DirectionRendrerMap from '@/components/directionRenderMaps';
import MainSelectCar from '@/components/mainComponents/mainCarSelect';
import MenuSheet from '@/components/mainComponents/menuSheet';
import { useRouter } from 'next/navigation';

export default function GoogleMapComponent () {
    const [clickedSeePrices, setClickedSeePrices] = useState(false)
  // @ts-ignore
  const {contextData, setContextData} = useMyContext();
    const [estimatedCost, setEstimatedCost] = useState(0)

  
      const [isExpanded, setIsExpanded] = useState(false);
      const handleDiv2Click = () => {
        setIsExpanded(!isExpanded);
      };
      const router = useRouter();
    
      useEffect(()=>{
        if(contextData.order.clickedSeePrices == 'clicked'){
          setClickedSeePrices(true)
          changeClickCondition(false)
        }
      },[contextData.order.clickedSeePrices])


// eslint-disable-next-line react-hooks/exhaustive-deps

      useEffect(() => {
        if (contextData.order.addresses.totalMiles != null) {
          
          const deposit = Math.round(estimatedCost * 0.2); // 20% of the total with discount
          const totalCash = estimatedCost - deposit;
          //@ts-ignore
          setContextData(prev => ({
            ...prev,
            order: {
              ...prev.order,
              bill: {
                ...prev.order.bill,
                subTotal: estimatedCost,
                deposit: deposit,
               totalInCash: totalCash
              }
            }
          }))
         
        } 
      }, [estimatedCost]);



      // If the car is under 3000 kg and has no issues:
      // Base price: £45
      // Additional cost per mile beyond 6 miles: £1.5
      // If the car is under 3000 kg and has issues:
      // Base price: £75
      // Additional cost per mile beyond 6 miles: £1.8
      // If the car is 3000 kg or more and has no issues:
      // Base price: £80
      // Additional cost per mile beyond 6 miles: £1.8
      // If the car is 3000 kg or more and has issues:
      // Base price: £100
      // Additional cost per mile beyond 6 miles: £1.9

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  const calculateEstimatedCost = () => {
    const drivingDistance = contextData.order.addresses?.totalMiles || 0;
    const carWeight = contextData.order.carInfo.weight;
    const nonDriveableReason = contextData.order.carInfo.nonDriveableReason;
    const isDriveable = nonDriveableReason === "";

    const baseDistance = 6;
    let basePrice, additionalRate;

    if (carWeight < 3000) {
      basePrice = isDriveable ? 45 : 75;
      additionalRate = isDriveable ? 1.5 : 1.8;
    } else {
      basePrice = isDriveable ? 80 : 100;
      additionalRate = isDriveable ? 1.8 : 1.9;
    }

    if (drivingDistance <= baseDistance) {
      return basePrice;
    } else {
      // using this the price will decrease significantly, gotta talk to drivers 
      // const additionalDistance = drivingDistance - baseDistance;
      const additionalDistance = drivingDistance;
      const additionalCost = additionalDistance * additionalRate;
      const totalCost = basePrice + additionalCost + 10;
      // My £10

      return Math.round(totalCost);
    }
  };

    const estimatedCost = calculateEstimatedCost();
    setEstimatedCost(estimatedCost);
  
  
      }, [contextData.order.addresses?.totalMiles]);

    //@ts-ignore
      function changeClickCondition(value){
        //@ts-ignore
        setContextData(prevData => ({
          ...prevData,
          clickedCondition: value,
            
          }
        ))
      }
    
    

    return (
      <div className='max-w-4xl mx-auto '>
        <div  className="w-[70%] xs:w-full mx-auto pt-5 px-2 flex justify-around cursor-pointer  p-4">
       <h3 onClick={()=>{router.push('/')}} className="text-black xs:text-lg text-3xl text-bold w-full">
         Recover<span onClick={()=>{router.push('/')}} className="text-amber-500">Pal</span>
       </h3>
       <MenuSheet />
     </div>

       
      <div id='parentdiv' className='w-full h-[100%] mt-5 relative  grid grid-rows-[40vh,auto]'>
       <div className=''>
      {clickedSeePrices ? <DirectionRendrerMap forPendingjobs={false} pickupAdd={contextData.order.addresses.pickupAddLatLng} dropoffAdd={contextData.order.addresses.dropoffAddLatLng} /> : <DefaultMap />}  
       </div>
        <div onClick={()=>{handleDiv2Click()}} className={`flex bg-[#F9F7F7] transorm duration-200 ease-in  w-full ${contextData.clickedCondition ? 'h-[40rem] absolute bottom-50' : ' cursor-pointer h-[28rem]'} flex-col`}>
        {  contextData.clickedCondition ? <Button className=' self-end rounded-full absolute font-bold top-10 right-5' variant={'outline'} onClick={() => { contextData.clickedCondition ? changeClickCondition(false) : null  }}>X</Button> : null}
        <MainSelectCar />        
       </div>
       </div> 

      </div>
    );
  };
  
  


        
    {/* <div className=' bg-[#F9F7F7] w-full  xs:absolute  flex flex-col z-10 bottom-0 flex items-center rounded-xl transorm duration-200 ease-in justify-center' style={bottomDivStyle}> */} 

// AIzaSyBtRLTK2xMQWQovc-RUWO0t7Ntl5S9glxk


 