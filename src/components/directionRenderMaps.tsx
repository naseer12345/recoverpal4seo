'use client'
import { useState, useEffect } from 'react';
import { GoogleMap, DirectionsRenderer , useJsApiLoader } from '@react-google-maps/api';  
import { useMyContext } from '@/context/context';
const mapStyles = [
    {
      featureType: 'all',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#7c93a3',
        },
        {
          lightness: '-10',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'administrative.country',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#a0a4a5',
        },
      ],
    },
    {
      featureType: 'administrative.province',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#62838e',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 45,
        },
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#f5f5f5',
        },
        {
          lightness: '0',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#f5f5f5',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffffff',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#787878',
        },
      ],
    },
    {
      featureType: 'road.arterial',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#e5e5e5',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#c3c3c3',
        },
      ],
    },
  ];
 

const mapContainerStyle = {
    height: '100%',
    width: '100%',
  };
  
//@ts-ignore
export default function DirectionRendrerMap(props){
 //@ts-ignore

  const {contextData , setContextData} = useMyContext()
      
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "asdf-asdf"
      })
      const [directionsResponse, setDirectionsResponse] = useState(null);
      const [directionsRenderer, setDirectionsRenderer] = useState(null);
      const [drivingDistance, setDrivingDistance] = useState(null);
      const [rendered, setRendered] = useState(false)
      useEffect(() => {
        // Check if the Google Maps API is loaded
        if (  window.google && window.google.maps && window.google.maps.DirectionsService && rendered == false) {
          const directionsService = new window.google.maps.DirectionsService();
          // Perform directions request
          directionsService.route(
            {
              origin: props.pickupAdd,
              destination: props.dropoffAdd,
              travelMode: window.google.maps.TravelMode.DRIVING,
            },
            (result, status) => {
              if (status === window.google.maps.DirectionsStatus.OK ) {
                // Handle successful response
                //@ts-ignore
                setDirectionsResponse(result);
                // Calculate driving distance

                //@ts-ignore
                const drivingDistanceInMeters = result.routes[0].legs[0].distance.value;
                const drivingDistanceInMiles = drivingDistanceInMeters * 0.000621371;
                //@ts-ignore
                setDrivingDistance(drivingDistanceInMiles.toFixed(2));
                setRendered(true)
                console.log(drivingDistance)
              } else {
                // Handle error
                console.error(`Error getting directions: ${status}`);
              }
            }
          );
        }
      }, [props.pickupAdd, props.dropoffAdd]);

      useEffect(()=>{
        if(props.forPendingjobs == false){
//@ts-ignore
setContextData(prevData => ({
  ...prevData,
  order: {
    ...prevData.order,
    addresses: {
      ...prevData.order.addresses,
      totalMiles: drivingDistance,
    }
  }
}));

        }
        
      },[drivingDistance])



    return (
        <div className='w-full h-full'>
        {isLoaded ? (
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={13}
              options={{
                disableDefaultUI: true,
                styles: mapStyles,
              }}
              center={props.pickupAdd}
            >
              {directionsResponse && (
           <DirectionsRenderer
           directions={directionsResponse}
            options={{
               polylineOptions: {
              strokeColor: '#000000',
            strokeOpacity: 1.0,
               strokeWeight: 5,
                 },
            }}
            //@ts-ignore
               onLoad={(renderer) => setDirectionsRenderer(renderer)}
      />
          )}
              
            </GoogleMap>
          ) : (
            <div>Loading...</div>
          )}
        
          </div>

    )
}