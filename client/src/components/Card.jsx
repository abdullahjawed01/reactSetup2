// import React from 'react'


// function Card({resData}) {

//     let Image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`
//   return (
//    <>
//    <style>
//    </style>
//  <div className='h-100 w-80 bg-red-950 rounded-2xl flex   m-4 px-4  justify-center flex-col   '>

//         <div className=' text-orange-200  self-center  pb-2 text-2xl aboslute '>
//     <h3 >{resData.name}</h3> </div>


//     <div>
//     <img src={Image} alt="items" className='h-50 w-full rounded-2xl' />
//     </div>

   
    

// {/* 
//     <div className='text-white text-2xl p-2'>
//     <p>{desc}</p>
//     </div> */}

//     <div className='text-white text-xl p-2 flex justify-between'>
//         <p>{resData.costForTwoMessage}</p>
//         <p className='bg-green-400 rounded-xl h-10 w-10 flex justify-center items-center'>{resData.avgRating}</p>
//     </div>

//     <div className='text-white mt-4 '>
//         <p>{resData.areaName}</p>
//     </div>

    
 



//        </div>

       
       
   
   
   
//    </>
//   )
// }

// export default Card

import React, { useState } from "react";

function Card({ resData }) {
  const [count, setCount] = useState(0);

  const Image = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData.cloudinaryImageId}`;

  return (
    <div className="flex justify-center items-center m-4">
      <div className="relative w-80 rounded-2xl bg-[#3e0101] overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)]">

      
        <span className="absolute inset-[-50%] bg-linear-to-b from-transparent via-cyan-400/30 to-transparent -rotate-45 -translate-y-full opacity-0 transition-all duration-500 hover:translate-y-full hover:opacity-100" />

       
        <div className="relative z-10 px-4 py-4 flex flex-col">

        
          <h3 className="text-cyan-300 text-2xl text-center mb-2">
            {resData.name}
          </h3>

      
          <div className="relative">
            <img
              src={Image}
              alt="items"
              className="w-full h-48 object-cover rounded-2xl"
            />

           
            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md rounded-xl flex items-center gap-4 px-4 py-2">
              <button
                onClick={() => setCount(Math.max(0, count - 1))}
                className="text-white text-xl font-bold hover:text-red-400 transition"
              >
                −
              </button>

              <span className="text-white text-lg">{count}</span>

              <button
                onClick={() => setCount(count + 1)}
                className="text-white text-xl font-bold hover:text-green-400 transition"
              >
                +
              </button>
            </div>
          </div>

        
          <div className="text-white text-lg mt-4 flex justify-between items-center">
            <p>{resData.costForTwoMessage}</p>
            <div className="flrx items-center text-yellow-500 text-sm mb-1">
              {Array.from({length:5}).map((_,i)=>(
                <span key={i}> {i< Math.floor(resData.avgRating) ? "★" : "☆" } </span>
              ))}
                <span className="ml-1  text-white " > ({resData.avgRating})</span>
            
            
            </div>
            
          </div>

         
          <p className="text-gray-300 mt-2">{resData.areaName}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

  // <span className="bg-green-400 text-black rounded-xl h-10 w-10 flex items-center justify-center">
  //             {resData.avgRating}</span>