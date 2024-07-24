import React from 'react'
import { createContext, useContext } from 'react'

export const TheameContext = createContext({
    theameMode: "light",
    darkTheame: ()=>{},
    lightTheame: ()=>{},
});

// export default TheameContext
export const TheameProvider = TheameContext.Provider

export default function useTheame(){
    return useContext(TheameContext)
}