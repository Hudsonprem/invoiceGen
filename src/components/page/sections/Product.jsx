import React from 'react'
import {rateCalulator, sumProductByGroup} from "../../../utils/utils-function"
import _ from "lodash"

export default function Product({ProductValue, idx, style,isLast, isOne, arr}) {
    let {Description_of_Goods,HSN_SAC,Quantity, Quantity_Unit,Rate } = ProductValue
  
    let dataAsGroup = _.chain(arr)
    .groupBy("HSN_SAC")
    .map((value, key) => ({ key, value }))
    .value()

  return ( <tr className={`h-[3vh]`}  style={{verticalAlign:"unset"}}>
                <td style={style}>  
                    <div className='text-center text-sm'>
                       {idx}
                    </div>
                </td>
                <td style={style}>  
                    <div className='text-left text-sm font-bold ml-2'>
                    {Description_of_Goods}
                    </div>
                </td>
                <td style={style}>  
                    <div className='text-center text-sm'>
                    {HSN_SAC}
                    </div>
                </td>
                <td style={style}>  
                    <div className='text-center text-sm font-bold'>
                    {Quantity} {Quantity_Unit}
                    </div>
                </td>
                <td style={style}>  
                    <div className='text-right text-sm mr-2'>
                    {Rate}
                    </div>
                </td>
                <td style={style}>  
                    <div className='text-center text-sm'>
                    {Quantity_Unit}
                    </div>
                </td>
                <td style={style}>  
                    <div className='text-right font-bold text-sm mr-2'>
                    {rateCalulator(Quantity, Rate)}         
                    </div>
                    {isLast &&  isOne !== 0 && <div className='text-right  border-solid border-t border-x-0 border-b-0 border-black font-bold text-sm pr-2'>
                    {sumProductByGroup(dataAsGroup)}
                    </div>} 
                </td>
            </tr>
  )
}
