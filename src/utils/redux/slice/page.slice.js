import {initialPage} from "../initialState"
import {createSlice} from "@reduxjs/toolkit"

const pageSlice = createSlice({
    name: "pageAction",
    initialState: initialPage,
    reducers: {
        addCompanyProfile(state,action){
            state.companyProfile = action.payload
        },
        addBuyerProfile(state,action){
            state.buyerProfile = action.payload
        },
        addExtraInfo(state,action){
            state.extraInfo = action.payload
        },
        addInvoiceInfo(state,action){
            state.invoiceInfo = action.payload
        },
        addProductInfo(state,action){
            state.productInfo = action.payload
        },
        addRole(state,action){
            state.roles = action.payload
        },
        changeCGST(state,action){
            state.CGST = action.payload
        },
        changeSGST(state,action){
            state.SGST = action.payload
        },
        changeInvoiceType(state,action){
            state.invoiceType = action.payload
        },
    }
})

export const {changeCGST, changeSGST, addRole, addBuyerProfile,addCompanyProfile,addExtraInfo,addInvoiceInfo,addProductInfo, changeInvoiceType} = pageSlice.actions
export default pageSlice.reducer
