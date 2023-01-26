import React from 'react'
import TaxDetails from "./sections/TaxDetails"
import {sumProductByGroup,sumGSTByGroup,totalGSTByGroup} from "../../utils/utils-function"
import {CGST,SGST} from "../../utils/constants/app.constant"
import _ from 'lodash';

export default function PayDetails({productList}) {

    let dataAsGroup = _.chain(productList.products)
    .groupBy("HSN_SAC")
    .map((value, key) => ({ key, value }))
    .value()

  return (
    <table className='w-full text-center' border="1">
            <tbody>
            <tr>
                <td className='w-3/12' rowSpan={2}>
                     <div className='text-center text-sm'>
                        HSN/SAC
                    </div>
                </td>
                <td className='w-1/12' rowSpan={2}>
                     <div className='text-center text-sm'>
                        Taxable Value
                    </div>
                </td>
                <td className='w-2/12' colSpan="2">
                     <div className='text-center text-sm'>
                        Central Tax
                    </div>
                </td>
                <td className='w-2/12' colSpan="2">
                     <div className='text-center text-sm'>
                         State Tax
                    </div></td> 
                <td className='w-1/12' rowSpan={2}>
                     <div className='text-center text-sm'>
                        Total Tax Amount
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                     <div className='text-center text-sm'>
                        Rate
                    </div>
                </td>
                <td>
                     <div className='text-center text-sm'>
                        Amount
                    </div>
                </td>
                <td>
                     <div className='text-center text-sm'>
                     Rate
                    </div>
                </td>
                <td>
                     <div className='text-center text-sm'>
                     Amount
                    </div>
                </td>
            </tr>

            {/* product loop here------------------------------- */}

            <TaxDetails ProductValue={productList.products}/>

            <tr>
                <td>
                     <div className='text-right font-bold text-sm  mr-2'>
                        Total
                    </div> 
                </td>
                <td>
                     <div className='text-right font-bold text-sm  mr-2'>
                      {sumProductByGroup(dataAsGroup)}
                    </div> 
                </td>
                <td>
                     <div className='text-right font-bold text-sm  mr-2'>
                        <br />
                    </div> 
                </td>
                <td>
                     <div className='text-right font-bold text-sm  mr-2'>
                       {sumGSTByGroup(dataAsGroup,CGST)}
                    </div> 
                </td>
                <td>
                     <div className='text-right font-bold text-sm  mr-2'>
                     <br />
                    </div> 
                </td>
                <td>
                     <div className='text-right font-bold text-sm  mr-2'>
                     {sumGSTByGroup(dataAsGroup,SGST)}
                    </div> 
                </td>
                <td>
                     <div className='text-right font-bold text-sm  mr-2'>
                        {totalGSTByGroup(dataAsGroup,CGST,SGST)}
                    </div> 
                </td>
            </tr>
            </tbody>
        </table>
  )
}
