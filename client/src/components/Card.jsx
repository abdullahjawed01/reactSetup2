import React from 'react'


function Card({name,desc,src,price,add,rate}) {
  return (
   <>
 <div className='h-100 w-80 bg-red-950 rounded-2xl flex   m-4 px-4  justify-center flex-col  '>

        <div className=' text-orange-200  self-center  pb-2 text-2xl aboslute '>
    <h3 >{name}</h3> </div>


    <div>
    <img src={src} alt="items" className='h-50 w-full rounded-2xl' />
    </div>

   
    


    <div className='text-white text-2xl p-2'>
    <p>{desc}</p>
    </div>

    <div className='text-white text-xl p-2 flex justify-between'>
        <p>{price}</p>
        <p className='bg-green-400 rounded-xl h-10 w-10 flex justify-center items-center'>{rate}</p>
    </div>

    <div className='text-white  p-1'>
        <p>{add}</p>
    </div>

    
 



       </div>

       
       
   
   
   
   </>
  )
}

export default Card