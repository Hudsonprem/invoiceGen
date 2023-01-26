import React from 'react'
import _ from 'lodash';
import {sumProduct,GSTPerCalulator,sumGST} from "../../../utils/utils-function" 
import {CGST,SGST} from "../../../utils/constants/app.constant" 
export default function TaxDetails({ ProductValue }) {

    let dataAsGroup = _.chain(ProductValue)
        .groupBy("HSN_SAC")
        .map((value, key) => ({ key, value }))
        .value()

    return (
        dataAsGroup.map((data, index) => {
            return <tr key={index}>
                <td>
                    <div className='text-right text-sm  mr-2'>
                        {data.key}
                    </div>
                </td>
                <td>
                    <div className='text-right text-sm  mr-2'>
                        {sumProduct(data.value)}
                    </div>
                </td>
                <td>
                    <div className='text-right text-sm  mr-2'>
                        {CGST}%
                    </div>
                </td>
                <td>
                    <div className='text-right text-sm  mr-2'>
                        {GSTPerCalulator(data.value, CGST)}
                    </div>
                </td>
                <td>
                    <div className='text-right text-sm  mr-2'>
                     {SGST}%
                    </div>
                </td>
                <td>
                    <div className='text-right text-sm  mr-2'>
                    {GSTPerCalulator(data.value, SGST)}
                    </div>
                </td>
                <td>
                    <div className='text-right text-sm  mr-2'>
                    {sumGST(data.value,CGST, SGST)}
                    </div>
                </td>
            </tr>
        })
    )
}
