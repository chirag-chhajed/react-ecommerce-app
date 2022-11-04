import React,{useState,useEffect} from "react";
import data from "./data/data";

const Context = React.createContext()

function ContextProvider({children}){
    const [allProducts,setAllProducts] = useState(data)
    console.log(allProducts)
    return(
        <Context.Provider value={{
            allProducts,
            setAllProducts
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}