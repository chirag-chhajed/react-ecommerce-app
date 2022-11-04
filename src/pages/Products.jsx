import React,{useContext
} from "react";
import Card from "../Components/Card";
import { Context } from "../Context";

export default function Products(){
   const {allProducts} = useContext(Context)
   console.log(allProducts.map(e => e.isFavourite))
   const products = allProducts.map( product => (
    
    <Card 
        id={product.id}
        image={product.image}
        brand={product.brand} 
        description={product.description}
        price={product.price}
    />
   ))
   
   
    return(
        <main className="flex flex-wrap gap-4 m-2">
            {products}
        </main>
    )
}