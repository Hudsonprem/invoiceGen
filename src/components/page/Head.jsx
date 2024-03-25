import React from 'react'
import capitalize from 'lodash/upperCase'
import { useSelector} from "react-redux"

export default function Head({role}) {
    let {invoiceType} = useSelector((state)=>state.pageData)
    return (
        <div className='grid grid-cols-3 justify-between w-full pb-2'>
            <div>

            </div>
            <div className='text-center font-bold tracking-wide'>
                {invoiceType}
            </div>
            <div className='text-right italic text-xs'>
                {capitalize(role)}
            </div>
        </div>
    )
}
