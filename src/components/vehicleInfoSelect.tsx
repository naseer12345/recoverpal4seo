import * as React from "react";
import { useState, useEffect } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import simplifiedVehicleData from './simplified-vehicle-data.json';
import { useMyContext } from "@/context/context";
import axios from 'axios';
export function SelectCar(props: any) {
  const [open, setOpen] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerm1, setSearchTerm1] = useState("");
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [carType, setCarType] = useState("");
  const [vehicleCondition, setVehicleCondition] = useState("");
  const [nonDrivableCondition, setNonDrivableCondition] = useState("");
  const [clickNotListed, setClickedNotListed] = useState(false)
  const [notListedCar, setNotListedCar] = useState(null)
const [notListedCarWeight, setNotListedCarWeight] = useState(null)
const [addtionalCmnts, setAdditionalCmnts] = useState(null)
const [carRegNumber, setCarRegNumber] = useState(null)
//@ts-ignore
const { contextData, setContextData} = useMyContext();







useEffect(()=>{
  //@ts-ignore
  setContextData(prevContextData => ({
    ...prevContextData,
    order: {
      ...prevContextData.order,
      carInfo: {
        ...prevContextData.order.carInfo,
        make: selectedMake
      }
    }
  }));
},[selectedMake])


useEffect(()=>{
  //@ts-ignore
  setContextData(prevContextData => ({
    ...prevContextData,
    order: {
      ...prevContextData.order,
      additionalCmnt: addtionalCmnts,
      }
    
  }));
},[addtionalCmnts])

useEffect(()=>{
  //@ts-ignore
  setContextData(prevContextData => ({
    ...prevContextData,
    order: {
      ...prevContextData.order,
      carInfo: {
        ...prevContextData.order.carInfo,
        model: selectedModel
      }
    }
  }));
},[selectedModel])
useEffect(()=>{
  //@ts-ignore
  setContextData(prevContextData => ({
    ...prevContextData,
    order: {
      ...prevContextData.order,
      carInfo: {
        ...prevContextData.order.carInfo,
        type: carType
      }
    }
  }));
},[carType])

useEffect(()=>{
  //@ts-ignore
  setContextData(prevContextData => ({
    ...prevContextData,
    order: {
      ...prevContextData.order,
      carInfo: {
        ...prevContextData.order.carInfo,
        year: selectedYear
      }
    }
  }));
},[selectedYear])

useEffect(()=>{
  //@ts-ignore
  setContextData(prevContextData => ({
    ...prevContextData,
    order: {
      ...prevContextData.order,
      carInfo: {
        ...prevContextData.order.carInfo,
        regNum: carRegNumber
      }
    }
  }));
},[carRegNumber])



useEffect(()=>{
  //@ts-ignore
  setContextData(prevContextData => ({
    ...prevContextData,
    order: {
      ...prevContextData.order,
      carInfo: {
        ...prevContextData.order.carInfo,
        notListedCarName: notListedCar
      }
    }
  }));
},[notListedCar])


useEffect(()=>{
  //@ts-ignore
  setContextData(prevContextData => ({
    ...prevContextData,
    order: {
      ...prevContextData.order,
      carInfo: {
        ...prevContextData.order.carInfo,
        notListedWeight: notListedCarWeight
      }
    }
  }));
},[notListedCarWeight])

useEffect(()=>{
  //@ts-ignore
  setContextData(prevContextData => ({
    ...prevContextData,
    order: {
      ...prevContextData.order,
      carInfo: {
        ...prevContextData.order.carInfo,
        nonDriveableReason: nonDrivableCondition
      }
    }
  }));
},[nonDrivableCondition])



useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.post('asdgfasdf', {
        make: selectedMake,
        year: selectedYear,
        model: selectedModel,
        vehicleType: carType,
      });
      if (response && response.data && response.data.weightKg) {
        //@ts-ignore
        setContextData(prevContextData => ({
          ...prevContextData,
          order: {
            ...prevContextData.order,
            carInfo: {
              ...prevContextData.order.carInfo,
              weight: response.data.weightKg
            }
          }
        }));
        console.log(contextData)
      } else {
        console.error("Invalid response received from the server");
      }
    } catch (error) {
      //@ts-ignore
      console.error(error.response ? error.response.data.error : "Network error:", error);
    }
  };

  
  fetchData();
}, [ selectedYear, carType]);
  const filterYears = () => {
    if (selectedMake === '' || selectedModel === '') return [];
    // @ts-ignore
    const years = simplifiedVehicleData[selectedMake]?.[selectedModel]?.years || [];
    // @ts-ignore
    let allYears = [];
    Object.keys(years).forEach(yearOrRange => {
      if (yearOrRange.includes('-')) {
        const [startYear, endYear] = yearOrRange.split('-').map(Number);
        for (let i = startYear; i <= endYear; i++) {
          allYears.push(i);
        }
      } else {
        allYears.push(Number(yearOrRange));
      }
    });
    // @ts-ignore 
    return allYears;
  };

  function handleSelectMake(e: any) {
    setSelectedMake(e);
    setOpen(prev => !prev)
   
    
  }

  const ConditionalDisplayOfBtns = { display: open ? 'none' : 'block'}
  const ConditionalDisplayOfBtnss = { display: openYear ? 'block' : 'none'}

  function handleSelectModel(e: any) {
    setSelectedModel(e);
    setOpen(false); // Close the make selection div
    setOpenYear(false)
  }

  

  const handleClick = () => {
    setOpen((prev) => !prev);
  };


  return (
    <div onClick={()=>props.tst()} className="xs:w-lg">
      {clickNotListed ? 
      
      
      <div className="flex flex-col gap-2">


        <input
            type="text"
            placeholder="Type your car make and model"
            // @ts-ignore
            value={notListedCar}
            // @ts-ignore
            onChange={(e) => setNotListedCar(e.target.value)}
            className="w-full px-3 py-2 rounded-md  border outline-none focus:border-blue-500"
          />
          <input
            type="number"
            placeholder="Type your car weight in KG"
            // @ts-ignore
            value={notListedCarWeight }
            // @ts-ignore
            onChange={(e) => setNotListedCarWeight(e.target.value)}
            className="w-full px-3 py-2 rounded-md  border outline-none focus:border-blue-500"
          />

       <div className="mt-2">
      <label htmlFor="regNum" className="block font-semibold ">Car registeration number</label>
      <input
            type="text"
            placeholder="Type registeration number"
            // @ts-ignore
            value={carRegNumber}
            id="regNum"
            // @ts-ignore
            onChange={(e) => setCarRegNumber(e.target.value)}
            className="w-full px-3 py-2 rounded-md  border outline-none focus:border-blue-500"
          />
      </div>

           <div className="mb-2">
        <label htmlFor="vehicleCondition" className="block font-semibold ">Vehicle Condition</label>
        <select
          id="vehicleCondition"
          className="w-full h-8 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          value={vehicleCondition}
          onChange={(e) => setVehicleCondition(e.target.value)}
          required
        >
         
          <option value="drivable">Drivable</option>
          <option value="non-drivable">Non-Drivable</option>
        </select>
      </div>

      {/* Non-Drivable Condition */}
      {vehicleCondition === 'non-drivable' && (
        <div className="mb-2">
          <label htmlFor="nonDrivableCondition" className="block font-semibold ">Non-Drivable Condition</label>
          <select
            id="nonDrivableCondition"
            className="w-full h-8 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={nonDrivableCondition}
            onChange={(e) => setNonDrivableCondition(e.target.value)}
            required
          >
            <option value="front-damage">Front Damage</option>
            <option value="back-damage">Back Damage</option>
            <option value="stuck-in-p">Stuck in P or Parking</option>
          </select>
        </div>
      )}
        
        

      </div>
      : 
      <>
      <div className="flex flex-col ">
      <label htmlFor="makebtn" className="block font-semibold xs:w-[14rem] ">Select car make: </label>
  <div className="w-full ">
   
        <Button variant={'outline'} className="w-full" id="makebtn"  style={ConditionalDisplayOfBtns} onClick={handleClick}>{selectedMake ? selectedMake : "Click to select"}</Button>
    
      {open && (
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-72 px-3 py-2 rounded-md  border outline-none focus:border-blue-500"
          />
          <div className="absolute z-10 max-h-40 overflow-y-auto mt-1 w-72 bg-white rounded-md shadow-lg">
            {Object.keys(simplifiedVehicleData).filter(option =>
              option.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((option) => (
              <div
                key={option}
                onClick={() => handleSelectMake(option)}
                className={cn(
                  "px-4 py-2 cursor-pointer",
                  selectedMake === option && "bg-gray-100"
                )}
              >
                {option}
                {selectedMake === option && (
                  <CheckIcon className="ml-2 w-4 h-4 text-green-500" />
                )}
              </div>
            ))}
            <div><Button variant={'outline'} onClick={()=>{setClickedNotListed(true)}} className="w-full mb-4">Click if not listed</Button></div>
          </div>
        </div>
      )}
      </div>
      </div>
      <div >
      <label htmlFor="makebtn" className="block font-semibold xs:w-[14rem] ">Select car model: </label>
      <div  className="flex flex-col">
        <Button variant={'outline'} disabled = {selectedMake ? false : true}    onClick={() => setOpenYear((prev) => !prev)}>{selectedModel ? selectedModel : "click to select"}</Button>
      
      {openYear ? <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm1}
          onChange={(e) => setSearchTerm1(e.target.value)}
          className="w-72 px-3 py-2 rounded-md border  outline-none focus:border-blue-500"
        />
        <div className="absolute z-10 max-h-40  overflow-y-auto mt-1 w-72 bg-white rounded-md shadow-lg">
        
          { // @ts-ignore
          Object.keys(simplifiedVehicleData[selectedMake]).filter(option =>
            option.toLowerCase().includes(searchTerm1.toLowerCase())
          ).map((option) => (
            <div
            style={ConditionalDisplayOfBtnss}
              key={option}
              onClick={() => handleSelectModel(option)}
              className={cn(
                "px-4 py-2 cursor-pointer",
                selectedModel === option && "bg-gray-100"
              )}
            >
              {option}
              {selectedModel === option && (
                <CheckIcon className="ml-2 w-4 h-4 text-green-500" />
              )}
            </div>
          ))}
        </div>
      </div> : null}
      </div>
      </div>
      <div className="mt-2">
      <label htmlFor="regNum" className="block font-semibold ">Car registeration number</label>
      <input
            type="text"
            placeholder="Type registeration number"
            // @ts-ignore
            value={carRegNumber}
            id="regNum"
            // @ts-ignore
            onChange={(e) => setCarRegNumber(e.target.value)}
            className="w-full px-3 py-2 rounded-md  border outline-none focus:border-blue-500"
          />
      </div>
      <div className="mb-2">
        <label htmlFor="year" className="block font-semibold ">Year</label>
        <select
          id="year"
          className="w-full h-8 rounded-md border  border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          disabled= {selectedModel ? false : true}
        >
          <option value="" >Select Year</option>
          {filterYears().map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>
      
      <div className="mb-2" style={{ maxWidth: "600px", overflowX: "auto" }}>
  <label htmlFor="carType" className="block font-semibold ">
    Car Type
  </label>
  <select
    id="carType"
    className="w-full h-8 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
    value={carType}
    onChange={(e) => setCarType(e.target.value)}
    required
  >
    <option value="">Select Car Type</option>
    {selectedYear &&
    // @ts-ignore
      simplifiedVehicleData[selectedMake] &&
      // @ts-ignore
      simplifiedVehicleData[selectedMake][selectedModel] &&
      // @ts-ignore
      simplifiedVehicleData[selectedMake][selectedModel].years &&
      // @ts-ignore
      (Object.keys(simplifiedVehicleData[selectedMake][selectedModel].years).some(
        (yearOrRange) =>
          yearOrRange === selectedYear.toString() ||
          (yearOrRange.includes('-') &&
          // @ts-ignore
            selectedYear >= Number(yearOrRange.split('-')[0]) &&
            // @ts-ignore
            selectedYear <= Number(yearOrRange.split('-')[1]))
      ) ? (// @ts-ignore
        simplifiedVehicleData[selectedMake][selectedModel].years[
          // @ts-ignore
          Object.keys(simplifiedVehicleData[selectedMake][selectedModel].years).find(
            (yearOrRange) =>
              yearOrRange === selectedYear.toString() ||
              (yearOrRange.includes('-') &&
              // @ts-ignore
                selectedYear >= Number(yearOrRange.split('-')[0]) &&
                // @ts-ignore
                selectedYear <= Number(yearOrRange.split('-')[1]))
          )
          // @ts-ignore
        ].map((type) => (
          <option  key={type} value={type}>
            {type}
          </option>
        ))
      ) : (
        // @ts-ignore
        <option value={null}>No car types available</option>
      ))}
  </select>
</div>



      <div className="mb-2">
        <label htmlFor="vehicleCondition" className="block font-semibold ">Vehicle Condition</label>
        <select
          id="vehicleCondition"
          className="w-full h-8 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
          value={vehicleCondition}
          onChange={(e) => setVehicleCondition(e.target.value)}
          required
        >
          
          <option value="drivable">Drivable</option>
          <option value="non-drivable">Non-Drivable</option>
        </select>
      </div>

      {/* Non-Drivable Condition */}
      {vehicleCondition === 'non-drivable' && (
        <div className="mb-2">
          <label htmlFor="nonDrivableCondition" className="block font-semibold ">Non-Drivable Condition</label>
          <select
            id="nonDrivableCondition"
            className="w-full h-8 rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            value={nonDrivableCondition}
            onChange={(e) => setNonDrivableCondition(e.target.value)}
            required
          >
            <option value="front-damage">Front Damage</option>
            <option value="back-damage">Back Damage</option>
            <option value="stuck-in-p">Stuck in P or Parking</option>
          </select>
        </div>
      )}
      </>
      }
       <div className="my-2">
      <label htmlFor="AddCmnts" className="block font-semibold ">Any additional comments</label>
      <input
            type="text"
            placeholder="Additional comments"
            // @ts-ignore
            value={addtionalCmnts}
            id="AddCmnts"
            // @ts-ignore
            onChange={(e) => setAdditionalCmnts(e.target.value)}
            className="w-full px-3 py-2 rounded-md  border outline-none focus:border-blue-500"
          />
      </div>
      
    </div>
  );
}

