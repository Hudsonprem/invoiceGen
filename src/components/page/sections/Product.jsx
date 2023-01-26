import React from 'react'
import {rateCalulator} from "../../../utils/utils-function"

export default function Product({ProductValue, idx, style}) {
    let {Description_of_Goods,HSN_SAC,Quantity, Quantity_Unit,Rate } = ProductValue
  return ( <tr className='h-[3vh]'  style={{verticalAlign:"unset"}}>
                <td style={style}>  
                    <div className='text-center text-sm'>
                       {idx}
                    </div>
                </td>
                <td style={style}>  
                    <div className='text-center text-sm font-bold'>
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
                    <div className='text-center text-sm'>
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
                </td>
            </tr>
  )
}
