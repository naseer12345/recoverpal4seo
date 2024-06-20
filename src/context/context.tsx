'use client'
import { createContext, useContext, useState } from 'react';
//@ts-ignore
const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);



const context ={
  // this should be userInfo because we can than use it for drivers too.
customerInfo: {
  Fname: null, 
  Lname: null,
  email: null, 
  uid : null, 
  phoneNum: null, 
  imgURL: null,

},
order : {  // can be used for pending orders too,
  customer: null, // customerId or uid
  addresses: {
    pickupAddLatLng: null,
    dropoffAddLatLng: null, 
    pickupAddText: null,
    dropOffAddText: null,
    totalMiles: null,

  }, 
  bill:{
    subTotal: null,
    deposit: null,
    totalInCash: null, 

  },
  selectedService: [null, null],
  orderId : null , // docRegId, 
  orderTime: null, 
  pickupTime: null,
  jobStatus: "Idle",
  carInfo:{
    make: null, 
    model: null, 
    type: null,
    year: null,
    regNum: null,
    weight: null, 
    notListedCarName: null,
    notListedWeight: null,
    nonDriveableReason: null,
  },
  additionalCmnt: null,
  clickedSeePrices: null,
  clickedCondition:null,
  clickedPay: null,
},

}


export const MyProvider = ({ children } : {
  children : React.ReactNode
}) => {
    const [contextData, setContextData] = useState(context);



    return (
        <MyContext.Provider value={{ contextData, setContextData}}>
            {children}
        </MyContext.Provider>
    );
};
