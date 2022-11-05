import React,{useContext
} from "react";
import Card from "../Components/Card";
import { Context } from "../Context";

export default function Products(){
   const {allProducts} = useContext(Context)
   const products = allProducts.map( product => (
    
    <Card 
        {...product}
    />
   ))
   
   
    return(
        <main className="flex flex-wrap gap-4 m-2">
            {products}
        </main>
    )
}