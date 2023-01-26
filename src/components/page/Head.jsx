import React from 'react'
import capitalize from 'lodash/upperCase'

export default function Head({role}) {
    return (
        <div className='grid grid-cols-3 justify-between w-full pb-2'>
            <div>

            </div>
            <div className='text-center font-bold tracking-wide'>
                Tax Invoice
            </div>
            <div className='text-right italic text-xs'>
                (TRIPLICATE FOR {capitalize(role)})
            </div>
        </div>
    )
}
