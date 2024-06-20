'use client'
import React, { useState } from 'react';

const Test = () => {
  const [isExpanded, setIsExpanded] = useState(false);


  const handleDiv2Click = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="parentdiv" className="w-full h-[100vh] bg-yellow-300 relative  grid grid-rows-[40vh,auto]">
      <div id="div1" className="bg-black w-full  overflow-hidden">
        <h1 className="text-red-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quo. Sapiente, obcaecati quaerat! Minus
          corrupti beatae ipsa distinctio! Delectus provident a totam est esse nam nulla porro enim dicta
          ad?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae quis sunt nisi illum. Impedit
          quaerat, ex consequuntur, voluptates magni esse sit maxime nihil reiciendis obcaecati consectetur quas.
          Debitis, facere! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum blanditiis nesciunt
          consectetur impedit illum nemo. Quod, dolorem quidem quaerat voluptas ea ut, quisquam repudiandae a quos
          dolor excepturi molestiae. Quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis
          dolore est, doloremque alias impedit minus commodi ea sunt ipsum dignissimos libero, odit enim iure dolores
          quod molestiae magni quia.
        </h1>
      </div>
      <div
        id="div2"
        className={`bg-white w-full ${isExpanded ? 'h-[70vh] absolute bottom-0 left-0' : ' cursor-pointer'}`}
        onClick={handleDiv2Click}
        style={{ zIndex: 1}}
      >
        <h1>div2</h1>
      </div>
    </div>
  );
};

export default Test;


//   return (
//     <div id="parentdiv" className="w-full h-[100vh] bg-yellow-300 grid grid-rows-[40vh,auto]">
//       <div id="div1" className="bg-black">
//         <h1 className="text-red-400">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, quo. Sapiente, obcaecati quaerat! Minus
//           corrupti beatae ipsa distinctio! Delectus provident a totam est esse nam nulla porro enim dicta
//           ad?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae quis sunt nisi illum. Impedit
//           quaerat, ex consequuntur, voluptates magni esse sit maxime nihil reiciendis obcaecati consectetur quas.
//           Debitis, facere! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum blanditiis nesciunt
//           consectetur impedit illum nemo. Quod, dolorem quidem quaerat voluptas ea ut, quisquam repudiandae a quos
//           dolor excepturi molestiae. Quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reiciendis
//           dolore est, doloremque alias impedit minus commodi ea sunt ipsum dignissimos libero, odit enim iure dolores
//           quod molestiae magni quia.
//         </h1>
//       </div>
//       <div
//         id="div2"
//         className={`bg-white ${isExpanded ? 'row-span-2' : 'cursor-pointer'}`}
//         onClick={handleDiv2Click}
//         style={{ zIndex: 1 }}
//       >
//         <h1>div2</h1>
//       </div>
//     </div>
//   );
// };

// export default Test;
