import React,{useState,useEffect} from "react";
import data from "./data/data";

const Context = React.createContext()

function ContextProvider({children}){
    const [allProducts,setAllProducts] = useState(data)

    function toggleFavorite(id){

        const updatedArr = allProducts.map(product => {
            if(product.id === id){
                
                return{...product,isFavourite: !product.isFavourite}
            }
            return product
        })
        setAllProducts(updatedArr)
    }
    return(
        <Context.Provider value={{
            allProducts,
            setAllProducts,
            toggleFavorite
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}