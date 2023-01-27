import React from 'react'
import Product from "./sections/Product"
import {SGST,CGST} from "../../utils/constants/app.constant"
import {GSTPerCalulator, roundOff, totalAmount, totalPair} from "../../utils/utils-function"

export default function ProductTable({productList}) {
  return (
    <table className='w-full text-center'  border="1">
            <tbody style={{borderBlockColor:"black"}}>
            <tr className='w-full ' style={{borderTop:"none"}}>
                <td className='w-1/12'>
                    <div className='text-sm'>
                    SI NO.
                    </div>
                </td>
                <td className='w-5/12'>
                    <div className='text-sm'>
                        Description of Goods
                    </div>
                </td>
                <td className='w-20'>
                    <div className='text-sm'>
                        HSN/SAC
                    </div>
                </td>
                <td className='w-32'> 
                    <div className='text-sm'>
                        Quantity
                    </div>
                </td>
                <td className='w-20'>
                    <div className='text-sm'>
                        Rate
                    </div>
                </td>
                <td className='w-8'>   
                    <div className='text-sm'>
                        Per
                    </div>
                </td>
                <td className='w-36'>   
                    <div className='text-sm'>
                        Amount
                    </div>
                </td>
            </tr>
            {/* product loop------------------------------------------------- */}
        {productList?.products?.map((product, idx, arr)=>{
            let isLast = arr.length - 1 === idx
            let style =  false ? {borderTop:"none"} :  {borderTop:"none",borderBottom:"none"}
                return <Product key={idx} ProductValue={product} idx={idx+1} style={style} isLast={isLast} arr={arr}/>
        })}
      

    {/* GST part------------------------------------------------------------------------------------------------------------- */}
            <tr className='h-[10vh]' style={{verticalAlign:"unset"}}>
                <td style={{borderTop:"none"}}> 
                    <div className='text-center text-sm'>
                       <br/>
                    </div>
                     </td>
                <td className='font-bold italic' style={{borderTop:"none"}} > 
                    <div className='text-right text-sm mr-2'>
                      Output Sgst @ {SGST}%
                    </div> 
                    <div className='text-right text-sm mr-2'>
                      Output Cgst @ {CGST}%
                    </div> 
                    <div className='text-right text-sm mr-2'>
                       Round Off
                    </div> 
                    </td>
                <td style={{borderTop:"none"}}> 
                    <div className='text-center text-sm'>
                            <br/>
                     </div> 
                    </td>
                <td style={{borderTop:"none"}}> 
                    <div className='text-center text-sm'>
                        <br/>
                    </div>
                    </td>
                <td style={{borderTop:"none"}}> 
                    <div className='text-right text-sm mr-2'>
                      {Number(SGST).toFixed(2)}
                    </div> 
                    <div className='text-right text-sm mr-2'>
                      {Number(CGST).toFixed(2)}
                    </div> 
                    <div className='text-right text-sm mr-2'>
                      <br />
                    </div> 
                    </td>
                <td style={{borderTop:"none"}}> 
                <div className='text-right text-sm mr-2'>
                       %
                    </div> 
                    <div className='text-right text-sm mr-2'>
                       %
                    </div> 
                    <div className='text-right text-sm mr-2'>
                      <br />
                    </div> 
                    </td>
                <td style={{borderTop:"none"}}> 
                    <div className='text-right font-bold text-sm mr-2'>
                      {GSTPerCalulator(productList.products,SGST)}
                    </div> 
                    <div className='text-right font-bold text-sm mr-2'>
                      {GSTPerCalulator(productList.products,CGST)}
                    </div> 
                    <div className='text-right font-bold text-sm mr-2'>
                     {roundOff(productList.products,CGST,SGST)}
                    </div> 
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <div className='text-right text-md mr-1'>
                        Total
                    </div>
                </td>
                <td></td>
                <td>
                    <div className='text-center text-sm font-bold'>
                    {totalPair(productList.products)}
                    </div>
                </td>
                <td></td>
                <td></td>
                <td>   
                    <div className='text-right text-sm mr-1 font-bold'>
                        &#8377;  {totalAmount(productList.products,CGST,SGST)}
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
  )
}
