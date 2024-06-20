
'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { SelectCar } from '@/components/vehicleInfoSelect';
import { useMyContext } from '@/context/context';
import Choices from '@/components/choices';
import { PlacesAutocomplete } from '@/components/addressesInput';

export default function MainSelectCar(){
    // @ts-ignore

  const {contextData, setContextData} = useMyContext();

    const [serviceSelected, setServiceSelected] = useState(false)
    const [clickedSeePrices, setClickedSeePrices] = useState(false)
    const [selected, setSelected] = useState({ latlng: null, text: null });
  const [selectedD, setSelectedD] = useState({ latlng: null, text: null });
  const [clickedCondition, setClickedCondtion] = useState(contextData.clickedCondition)
    const test = {
      position: "absolute",
      // Use ternary operator to conditionally apply styles
      top: clickedCondition ? null : "25rem",
      transform: clickedCondition ? null : "translateY(-50%)"
    };
   
      const bottomDivStyle = {
        height: clickedCondition ? '85vh' : '45vh',
      };


      useEffect(()=>{
        console.log(selected, selectedD)
        //@ts-ignore
        setContextData(prevData => ({
          ...prevData,
          order: {
            ...prevData.order,
            addresses: {
              ...prevData.order.addresses,
              pickupAddLatLng: selected.latlng,
              dropoffAddLatLng: selectedD.latlng,
              pickupAddText: selected.text,
              dropOffAddText: selectedD.text
            }
          }
        }));
        },[selected, selectedD])


  
    //   useEffect(()=>{
    //     if(contextData.order.selectedService[0] != null  ){
    //       setServiceSelected(true)
         
    //     }
    //   },[])
//@ts-ignore-all
    function changeClickCondition(value){
      //@ts-ignore
      setContextData(prevData => ({
        ...prevData,
        clickedCondition: value,
          
        }
      ))
    }
      useEffect(()=>{
        if(contextData.order.clickedSeePrices == 'clicked'){
          setClickedSeePrices(true)
          changeClickCondition(false)
        }
      },[contextData.order.clickedSeePrices])
//@ts-ignore
      function changePayCondtion(value){
        //@ts-ignore
        setContextData(prevData => ({
          ...prevData,
          clickedPay: value,
            
          }
        ))
      }

    return (
      <div className='max-w-4xl mx-auto'>

    {contextData.order.clickedSeePrices ?  <div className=" flex flex-col items-center mt-5 h-[100%] shadow-lg rounded-lg p-1">

      <h2 className="text-2xl font-bold mb-4">Select your RecoverPal</h2>
      <div className="grid grid-cols-1 gap-4">
        
          <div onClick={()=>{changePayCondtion(true)}}  className="flex items-center p-2 mb-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100">
            <div className="w-16 h-16 mr-4">
              <img src={'https://cdn.icon-icons.com/icons2/577/PNG/256/TowTruck_Yellow_icon-icons.com_54896.png'} alt={'recovery'} width={64} height={64} />
            </div>
            <div className='w-full '>
              <h3 className="text-lg font-semibold">RecoveryX journery: {contextData.order.addresses.totalMiles} miles</h3>
              <div className='flex  justify-between items-center'>
                <p className=' text-sm'>Driver 15 min away</p>
                <div>
         <p className="text-gray-600 font-bold">£{contextData.order.bill?.subTotal || 0}</p>
              </div>
              </div>
            </div>
          </div>
     
      </div>
    </div> :  <Carousel className="w-full max-w-xs">
      <CarouselContent>
    { serviceSelected ? null :
        <CarouselItem onClick={() => { contextData.clickedCondition ? null :  changeClickCondition(true)}} className='flex justify-around flex-col'>
       <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Enter details to see prices
       </h3>


          <Choices />


       </CarouselItem> }
     

          <CarouselItem onClick={() => { contextData.clickedCondition ? null :  changeClickCondition(true)}} >
            
            <div className='flex flex-col justify-center h-full'>
           {serviceSelected ? <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Enter details to see prices
       </h3> : null } 
                  <PlacesAutocomplete
                  setSelected={setSelected} 
                  setSelectedD={setSelectedD} 
                  placeHolder={"Enter pickup address"}
                  isForPickup={true}
                />
             <div className="relative">
            <PlacesAutocomplete
              setSelected={setSelectedD} 
              setSelectedD={setSelectedD} 
              placeHolder={"Enter dropoff address"}
              isForPickup={false}
            />


              </div>

            </div>
          
          </CarouselItem>
          <CarouselItem >
          <SelectCar tst={() => setClickedCondtion(true)}/>
          </CarouselItem>
      </CarouselContent>
      
      <CarouselPrevious 
      //@ts-ignore
      style={test}   />
      <CarouselNext
      //@ts-ignore
      style={test} />
    </Carousel> }
      </div>
     
    );
  };
  




// AIzaSyBtRLTK2xMQWQovc-RUWO0t7Ntl5S9glxk

