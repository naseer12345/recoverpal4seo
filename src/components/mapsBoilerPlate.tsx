// 'use client';

// import { useState, useEffect , useRef} from 'react';
// import { GoogleMap, LoadScript, MarkerF, DirectionsRenderer } from '@react-google-maps/api';
// import { useLoadScript } from '@react-google-maps/api';
// const mapContainerStyle = {
//   height: '100%',
//   width: '100%',
// };

// const mapStyles = [
//     {
//       featureType: 'all',
//       elementType: 'labels.text.fill',
//       stylers: [
//         {
//           color: '#7c93a3',
//         },
//         {
//           lightness: '-10',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative.country',
//       elementType: 'geometry',
//       stylers: [
//         {
//           visibility: 'on',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative.country',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           color: '#a0a4a5',
//         },
//       ],
//     },
//     {
//       featureType: 'administrative.province',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           color: '#62838e',
//         },
//       ],
//     },
//     {
//       featureType: 'landscape',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           color: '#f5f5f5',
//         },
//       ],
//     },
//     {
//       featureType: 'landscape.man_made',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           color: '#f5f5f5',
//         },
//       ],
//     },
//     {
//       featureType: 'poi',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'road',
//       elementType: 'all',
//       stylers: [
//         {
//           saturation: -100,
//         },
//         {
//           lightness: 45,
//         },
//         {
//           visibility: 'simplified',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'simplified',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           color: '#f5f5f5',
//         },
//         {
//           lightness: '0',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'geometry.stroke',
//       stylers: [
//         {
//           color: '#f5f5f5',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'labels.text',
//       stylers: [
//         {
//           color: '#ffffff',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'labels.text.fill',
//       stylers: [
//         {
//           color: '#ffffff',
//         },
//       ],
//     },
//     {
//       featureType: 'road.highway',
//       elementType: 'labels.text.stroke',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'road.arterial',
//       elementType: 'labels.text.fill',
//       stylers: [
//         {
//           color: '#787878',
//         },
//       ],
//     },
//     {
//       featureType: 'road.arterial',
//       elementType: 'labels.text.stroke',
//       stylers: [
//         {
//           visibility: 'off',
//         },
//       ],
//     },
//     {
//       featureType: 'transit',
//       elementType: 'all',
//       stylers: [
//         {
//           visibility: 'simplified',
//         },
//       ],
//     },
//     {
//       featureType: 'transit.line',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           color: '#e5e5e5',
//         },
//       ],
//     },
//     {
//       featureType: 'transit.station',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           color: '#e5e5e5',
//         },
//       ],
//     },
//     {
//       featureType: 'water',
//       elementType: 'geometry.fill',
//       stylers: [
//         {
//           color: '#c3c3c3',
//         },
//       ],
//     },
//   ];
//   const GoogleMapComponent = () => {
    // const [directionsResponse, setDirectionsResponse] = useState(null);
    // const [directionsRenderer, setDirectionsRenderer] = useState(null);
    // const [drivingDistance, setDrivingDistance] = useState(null);

    // const customerData = {
    //   pickupAddress: { lat: 37.7749, lng: -122.4194 },
    //   dropOffAddress: { lat: 37.7882, lng: -122.4056 },
    // };

// useEffect(() => {
//     if (customerData && window.google != undefined) {
    

//       const directionsService = new window.google.maps.DirectionsService();
//       directionsService.route(
//         {
//           origin: customerData.pickupAddress,
//           destination: customerData.dropOffAddress,
//           travelMode: window.google.maps.TravelMode.DRIVING,
//         },
//         (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             setDirectionsResponse(result);

//             // Get the driving distance from the directions response
//             const drivingDistanceInMeters = result.routes[0].legs[0].distance.value;
//             const drivingDistanceInMiles = drivingDistanceInMeters * 0.000621371;
//             setDrivingDistance(drivingDistanceInMiles.toFixed(2));
//           } else {
//             console.error(`Error getting directions: ${status}`);
//           }
//         }
//       );
//     }
//   }, [customerData]);
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyBtRLTK2xMQWQovc-RUWO0t7Ntl5S9glxk',
//      libraries: ["places"],
//   });
//   return (

// <div className='xs:w-[100%] xs:h-[40vh] w-full h-[40vh]'>
  

// {isLoaded && (
//   <GoogleMap
//     mapContainerStyle={mapContainerStyle}
//     zoom={13}
    
//     options={{
//       disableDefaultUI: true,
//       styles: mapStyles,
//     }}
//   >
//     <MarkerF position={customerData.pickupAddress} />
//     {customerData.pickupAddress && (
//       <MarkerF
//         position={{
//           lat: customerData.pickupAddress.lat + 0.03,
//           lng: customerData.pickupAddress.lng + 0.03,
//         }}
//         icon={{
//           url: 'https://cdn.icon-icons.com/icons2/577/PNG/256/TowTruck_Yellow_icon-icons.com_54896.png',
//           scaledSize: new window.google.maps.Size(60, 60),
//         }}
//       />
//     )}
//     {customerData.dropOffAddress && (
//       <MarkerF
//         position={{
//           lat: customerData.dropOffAddress.lat + 0.008,
//           lng: customerData.dropOffAddress.lng + 0.008,
//         }}
//         icon={{
//           url: 'https://cdn.icon-icons.com/icons2/577/PNG/256/TowTruck_Yellow_icon-icons.com_54896.png',
//           scaledSize: new window.google.maps.Size(60, 60),
//         }}
//       />
//     )}
    // {directionsResponse && (
    //   <DirectionsRenderer
    //     directions={directionsResponse}
    //     options={{
    //       polylineOptions: {
    //         strokeColor: '#000000',
    //         strokeOpacity: 1.0,
    //         strokeWeight: 5,
    //       },
    //     }}
    //     onLoad={(renderer) => setDirectionsRenderer(renderer)}
    //   />
    // )}
//   </GoogleMap>
  
// )}

// </div>


//     );
//   };
  
//   export default GoogleMapComponent;




// // AIzaSyBtRLTK2xMQWQovc-RUWO0t7Ntl5S9glxk