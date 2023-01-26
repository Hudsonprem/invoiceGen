import { configureStore } from "@reduxjs/toolkit"
import pageReducer from "./slice/page.slice";

const store = configureStore({
    reducer: {
        pageData: pageReducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck:false
    })
})

export default store;