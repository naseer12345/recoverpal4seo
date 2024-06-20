"use client"
import React from 'react';
import { useState, useEffect } from 'react';
import { GoogleMap, MarkerF , useJsApiLoader } from '@react-google-maps/api';
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
  

export default function DefaultMap(){
    const [mapLoaded, setMapLoaded] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const customerData = {
        pickupAddress: { lat: 37.7749, lng: -122.4194 },
        dropOffAddress: { lat: 37.7882, lng: -122.4056 },
      };
      //@ts-ignore
      const {contextData, setContextData} = useMyContext();
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "d-d"
      })
      useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentLocation({
                      //@ts-ignore
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error('Error getting user location:', error);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    

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
              //@ts-ignore
              center={currentLocation}
            >
              
              <MarkerF
              //@ts-ignore
                position={currentLocation} />
              {currentLocation && (
                <MarkerF
                  position={{
                    //@ts-ignore
                    lat: currentLocation.lat + 0.03,
                    //@ts-ignore
                    lng: currentLocation.lng + 0.03,
                  }}
                  icon={{
                    url: 'https://cdn.icon-icons.com/icons2/577/PNG/256/TowTruck_Yellow_icon-icons.com_54896.png',
                    scaledSize: new window.google.maps.Size(60, 60),
                  }}
                />
              )}
              {currentLocation && (
                <MarkerF
                  position={{
                    //@ts-ignore
                    lat: currentLocation.lat + 0.008,
                    //@ts-ignore
                    lng: currentLocation.lng + 0.008,
                  }}
                  icon={{
                    url: 'https://cdn.icon-icons.com/icons2/577/PNG/256/TowTruck_Yellow_icon-icons.com_54896.png',
                    scaledSize: new window.google.maps.Size(60, 60),
                  }}
                />
              )}
              
            </GoogleMap>
          ) : (
            <div>Loading...</div>
          )}
          </div>

    )
}