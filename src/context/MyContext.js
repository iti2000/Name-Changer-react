import React,{createContext, useReducer, useState} from 'react'
import { NameReducer } from '../reducers/NameReducer';
import { SurnameReducer } from '../reducers/SurnameReducer';

export const MyContext = createContext();

export const MyContextProvider = (props) => {

    const[name,namedispatch] = useReducer(NameReducer,'Iti')
    const[surname,surnamedispatch] = useReducer(SurnameReducer,'Patel')

    
    
    return(
        <MyContext.Provider value={{
           name,surname,namedispatch,surnamedispatch
        }} >
            {props.children}
        </MyContext.Provider>
    )
}

// export default MyContextProvider;