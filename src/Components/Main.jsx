import React from "react";
import Card from "./Card";
// import {nanoid} from 'nanoid'
import jordan from "../data/jordan";
import yeezy from "../data/yeezy";
import ProductRow from "./ProductRow";

export default function Main(){
    const card1 = jordan.map(e =>{
        return(
            <Card
                key={e.id}
                image={e.image}
                brand={e.brand}
                productName={e.productName}
                price={e.price}
                
             />
        )
    })
    const card2 = yeezy.map(e =>{
        return(
            <Card
                key={e.id}
                image={e.image}
                brand={e.brand}
                productName={e.productName}
                price={e.price}
                
             />
        )
    })
    return(
        <main className="w-full bg-main px-6 py-4 flex flex-col gap-16">
            <ProductRow 
                brand="jordan"
                card={card1}
            />
            <ProductRow
                brand="yeezy"
                card={card2}
            />
            <ProductRow 
                brand="jordan"
                card={card1}
            />
            <ProductRow
                brand="yeezy"
                card={card2}
            />
            
        </main>
    )
}