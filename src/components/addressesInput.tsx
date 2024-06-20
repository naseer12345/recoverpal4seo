'use client'

import React,{useEffect} from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import { useJsApiLoader } from '@react-google-maps/api';
import { Input } from '@/components/ui/input';
// @ts-ignore

export const PlacesAutocomplete = ({ setSelected, setSelectedD, placeHolder, isForPickup }) => {

    const {
      
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();
  
    // when the input was most of the time disable becuase the ready equaled to false then i fixed this just by simply fucking writing it outside,
    // just keep it mind, i was worried about this shit alot. 
    const ready = usePlacesAutocomplete()
    // useEffect(()=>{
    //   if(!ready){
    //     console.log("not ready")
    //   }else{
    //     console.log("its ready")
    //   }
    // },[ready])
  //@ts-ignore
  
    const handleSelect = async (description) => {
      setValue(description, false);
      clearSuggestions();
      try {
        const results = await getGeocode({ address: description });
        const { lat, lng } = await getLatLng(results[0]);
        const selectedState = { latlng: { lat, lng }, text: description };
        // Check isForPickup condition
        if (isForPickup) {
          setSelected(selectedState);
        } else {
          setSelectedD(selectedState);
        }
      } catch (error) {
        //@ts-ignore
        console.error('Error: ', error.message);
      }
    };
    
  
    return (
      <div>
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          placeholder={placeHolder}
          className="mt-2 font-black border-gray-500"
          autoComplete="off" 
        />
        {status === 'OK' && data.length > 0 && (
          <div className="p-1 w-full ml-5 rounded mt-2 bg-white">
            {data.map(({ place_id, description }) => (
              <div key={place_id} onClick={() => handleSelect(description)} className="cursor-pointer p-2 hover:bg-gray-200">
                {description}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  