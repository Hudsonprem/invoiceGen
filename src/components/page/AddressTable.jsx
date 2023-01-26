import React from 'react'
import isEmpty from 'lodash/isEmpty'

export default function AddressTable({companyProfile, buyerProfile,invoiceInfo}) {
    let { H_Company_Name,H_Address_1,H_Address_2,H_Address_3, H_GSTIN_UIN,  H_State_Name, H_Code} = companyProfile
    let { B_Company_Name,B_Address_1,B_Address_2,B_Address_3, B_GSTIN_UIN,  B_State_Name, B_Code} = buyerProfile
    let { Invoice_No,Invoice_Dated,Delivery_note,Mode_payment, Suppilers_ref,  Other_References, Buyers_Order_No, Buyer_Dated, Despatch_Document_No,Delivery_Note_Date,Despatch_through,Destination, Terms_of_Delivery } = invoiceInfo
  return (
    <table className='w-full ' border="1">
            <tbody style={{borderBlockColor:"black"}}>
            <tr >
                <td className='w-6/12 h-[10vh]' rowSpan={3} style={{verticalAlign:"unset"}}>
                    <div className='flex flex-col justify-start ml-1 pt-1'>
                                <div className='font-bold'>
                                    {H_Company_Name}
                                </div>
                                <div>
                                    {H_Address_1}
                                </div>
                                <div>
                                    {H_Address_2}
                                </div>
                                <div>
                                    {H_Address_3}
                                </div>
                                <div>
                                   GSTIN/UIN : {H_GSTIN_UIN}
                                </div>
                                <div>
                                   State Name {H_State_Name}, Code : {H_Code}
                                </div>
                    </div>
                </td>
                <td className='w-3/12' >
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                    Invoice No.
                                </div>
                                <div className='mt-2 font-bold'>
                                    {isEmpty(String(Invoice_No)) ? <br /> : Invoice_No}
                                </div>
                    </div>
                </td>
                <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                    Dated
                                </div>
                                <div className='mt-2 font-bold'>
                                    {isEmpty(Invoice_Dated) ? <br /> : Invoice_Dated}
                                </div>
                    </div>
                </td>
            </tr>
            <tr>
                 <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                    Delivery Note
                                </div>
                                <div className='mt-2 font-bold text-sm'>
                                    {isEmpty(Delivery_note) ? <br /> : Delivery_note}
                                </div>
                    </div>
                </td>
                <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                  Mode/Terms of Payment
                                </div>
                                <div className='mt-2 font-bold'>
                                {isEmpty(Mode_payment) ? <br /> : Mode_payment}
                                </div>
                    </div>
                </td>
            </tr>
            <tr>
            <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                   Suppiler's Ref.
                                </div>
                                <div className='mt-2 font-bold'>
                                 {isEmpty(Suppilers_ref) ? <br /> : Suppilers_ref}
                                </div>
                    </div>
                </td>
                <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                    Other Reference(s)
                                </div>
                                <div className='mt-2 font-bold'>
                                 {isEmpty(Other_References) ? <br /> : Other_References}
                                </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td rowSpan={4} style={{verticalAlign:"unset"}}>
                <div className='flex flex-col justify-start ml-1'>
                                <div className='pb-1'>
                                    Buyer
                                </div>
                                <div className='font-bold'>
                                    {B_Company_Name}
                                </div>
                                <div>
                                    {B_Address_1}
                                </div>
                                <div>
                                    {B_Address_2}
                                </div>
                                <div>
                                    {B_Address_3}
                                </div>
                                <div>
                                   GSTIN/UIN : {B_GSTIN_UIN}
                                </div>
                                <div>
                                   State Name {B_State_Name}, Code : {B_Code}
                                </div>
                    </div>
                </td>
                <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                   Buyer's Order No
                                </div>
                                <div className='mt-2 font-bold'>
                                {isEmpty(Buyers_Order_No) ? <br /> : Buyers_Order_No}
                                </div>
                    </div>
                </td>
                <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                     Dated
                                </div>
                                <div className='mt-2 font-bold'>
                                {isEmpty(Buyer_Dated) ? <br /> : Buyer_Dated}
                                </div>
                    </div>
                </td>
            </tr>
            <tr>
            <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                    Despatch Document No.
                                </div>
                                <div className='mt-2 font-bold'>
                                {isEmpty(Despatch_Document_No) ? <br /> : Despatch_Document_No}
                                </div>
                    </div>
                </td>
                <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                    Delivery Note Date
                                </div>
                                <div className='mt-2  font-bold'>
                                     {isEmpty(Delivery_Note_Date) ? <br /> : Delivery_Note_Date}
                                </div>
                    </div>
                </td>
            </tr>
            <tr>
            <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                   Despatch through
                                </div>
                                <div className='mt-2  font-bold'>
                                 {isEmpty(Despatch_through) ? <br /> : Despatch_through}
                                </div>
                    </div>
                </td>
                <td className='w-3/12'> 
                    <div className='flex flex-col justify-between h-full ml-1'>
                                <div className='text-sm'>
                                    Destination
                                </div>
                                <div className='mt-2 font-bold'>
                                {isEmpty(Destination) ? <br /> : Destination}
                                </div>
                    </div>
                </td>
            </tr>
            <tr className='h-20' style={{verticalAlign:"unset"}}>
                <td colSpan={2}>
                     <div className='flex flex-col justify-between h-full text-md ml-1'>
                                <div className='text-sm'>
                                     Terms of Delivery
                                </div>
                                <div className='mt-2'>
                                    {Terms_of_Delivery}
                                </div>
                    </div>
               
                </td>
            </tr>
        
            </tbody>
            </table>
  )
}
