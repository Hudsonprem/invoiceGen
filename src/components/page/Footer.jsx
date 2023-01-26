import React from 'react'
import {numberToWordConvert,totalGSTByGroup} from "../../utils/utils-function"
import {CGST,SGST} from "../../utils/constants/app.constant"
import _ from "lodash"
export default function Footer({productList,extraInfo}) {
    let {H_Company_Pan } = extraInfo

    let dataAsGroup = _.chain(productList.products)
    .groupBy("HSN_SAC")
    .map((value, key) => ({ key, value }))
    .value()
    let numberName = totalGSTByGroup(dataAsGroup,CGST,SGST)
    console.log(numberName);

  return (
    <div className='border border-solid' style={{borderBottom:"none", borderTop:"none"}}>
        {/* */}
        <div className='flex flex-col justify-start w-full py-2 font-light text-sm pl-2'>
             <div className='pr-1'>
                Tax Amount (in words)  :
            </div>
             <div className='font-bold '>
             INR {numberToWordConvert(numberName)}
            </div>
       </div>

       {/* Pan section */}
        <div className='flex justify-between w-80 pt-7 pb-2 pl-2'>
            <label>
                Company's PAN 
            </label>
            <span>
                : {_.isEmpty(H_Company_Pan) ? "AJHPD5000H": H_Company_Pan}
            </span>
        </div>

       {/* Footer in declaration section */}
         <div className='flex  justify-between items-end w-full pl-2 '>
            <div className='w-1/2 pb-2 '>
                <label className='underline mb-1 pb-2'>
                    Declaration
                </label>
                <div>
                We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct
                </div>
            </div>
            <div className='w-1/2 border border-solid h-24 p-2 border-black' style={{borderBottom:"none", borderRight:"none"}}>
                <div className='flex flex-col justify-between items-end h-full'>
                       <div className='h-full'>
                        for STARWIN ENTERPRISES
                       </div>
                       <div className='h-full flex flex-col justify-end items-end'>
                        Authorised Signatory
                       </div>
                </div>        
            </div>
        </div>
        </div>
  )
}
