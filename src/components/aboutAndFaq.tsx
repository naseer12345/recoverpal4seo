import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const AboutAndFAQ = () => {
  return (
    <Accordion type="single" collapsible className='mt-5 max-w-4xl'>
  <AccordionItem value="item-1">
    <AccordionTrigger className="text-2xl font-extrabold text-gray-900 ">About RecoverPal</AccordionTrigger>
    <AccordionContent className="list-disc list-inside text-lg text-gray-700">
    RecoverPal is your trusted partner for all your vehicle recovery needs. Whether you&apos;re standard road side breakdown, stuck in mud, or in need of a jumpstart, our dedicated recovery drivers are ready to assist you
        24/7. With our state-of-the-art equipment, experienced recovery technicians, and commitment to exceptional recovery or breakdown service, we
       ensure that you receive reliable and efficient recovery, breakdown support when you need it most.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger className="text-2xl font-bold text-gray-900 ">How RecoverPal Works</AccordionTrigger>
    <AccordionContent>
    <ol className="list-decimal list-inside text-lg text-gray-700 mb-8">   <li className="mb-2">
      <span className='font-bold'>Request Service:</span>  When you find yourself in need of recovery towing services, simply visit our website or use
           our mobile app to place a service request. Provide your location, vehicle details, and the type of service you
         require (recovery, jumpstart, or stuck vehicle recovery).
       </li>
     <li className="mb-2">
     <span className='font-bold'>Instant Quote:</span>  Based on your recovery service request details, our system will generate an instant quote, giving you a
         transparent and upfront pricing estimate. You&apos;ll know exactly what to expect before confirming your request.
     </li>
       <li className="mb-2">
       <span className='font-bold'>Recovery Technician Dispatch:</span>  Once you confirm your service request and make the necessary payment, our nearest
         available recovery technician will be immediately dispatched to your location. You can track their real-time progress
         through our app, so you know exactly when help will arrive.
       </li>
       <li className="mb-2">
       <span className='font-bold'>Professional Service:</span>  Our skilled recovery or breakdown technicians will arrive at your location with the appropriate equipment to
         handle your specific situation. They will assess the condition of your vehicle and provide the necessary
         recovery or assistance services to get you back on the road safely.
       </li>
       <li>
       <span className='font-bold'>Customer Satisfaction:</span>   We prioritize your satisfaction and strive to exceed your expectations. Our technicians
      will ensure that your vehicle is securely transported or serviced, and they will provide you with a
         hassle-free experience from start to finish.
    </li>
  </ol>

    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger className="text-2xl font-bold text-gray-900 ">Why Choose RecoverPal</AccordionTrigger>
    <AccordionContent>
    <ul className="list-disc list-inside text-lg text-gray-700">
        <li className="mb-2">
        <span className='font-bold'>Reliability:</span>    We understand the importance of timely assistance during vehicle emergencies. That&apos; why we
          maintain a network of strategically located technicians to ensure 5 minutes response times and reliable service
          whenever you need us.
        </li>
        <li className="mb-2"> 
        <span className='font-bold'>Expertise:</span>     Our recovery drivers consists of highly trained and experienced professionals who are equipped to handle
          various vehicle recovery scenarios. From cars to motorcycles, we have the knowledge and skills to provide safe
          and efficient service.
        </li>
        <li className="mb-2">
        <span className='font-bold'>Advanced Equipment:</span>    We invest in state-of-the-art recovery equipment, including modern tow trucks, winches,
          and specialized tools, to ensure that we can handle any challenge that comes our way. Your vehicle is in good
          hands with RecoverPal.
        </li>
        <li className="mb-2">
        <span className='font-bold'>Transparent Pricing: </span>    We believe in transparent and fair pricing. With our instant quote system, you&apos;ll know
          the exact cost of your service upfront, with no hidden fees or surprises. We strive to provide competitive
          rates without compromising on the quality of our service.
        </li>
        <li>
        <span className='font-bold'>Customer-Centric Approach:</span>   At RecoverPal, our customers are at the heart of everything we do. We prioritize
          your safety, comfort, and satisfaction throughout the recovery process. Our friendly and professional
          technicians will go above and beyond to ensure that you have a positive experience with us.
        </li>
      </ul>
    </AccordionContent>
  </AccordionItem>
</Accordion>
  
    
   

  );
};

export default AboutAndFAQ;