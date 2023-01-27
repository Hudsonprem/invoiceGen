import React from 'react'
import {numberToWordConvert} from "../../utils/utils-function"

export default function NumberInWord({totalPrice}) {
  return (
    <div className='border border-solid px-2' style={{borderBottom:"none", borderTop:"none"}}>
    {/* name section */}
     <div className='flex justify-between w-full pt-1 text-sm'>
         <div>
             Amount Chargeable (in Words)
         </div>
         <div className='font-light text-sm'>
             E. & O.E
         </div>
     </div>

     {/* Number in word section */}
       <div className='flex justify-start w-full py-2 font-bold text-sm'>
         <div>
             INR {numberToWordConvert(totalPrice)}
         </div>
     </div>
 </div>
  )
}
