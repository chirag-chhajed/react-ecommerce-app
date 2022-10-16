import React from "react";
import Card from "./Card";
// import {nanoid} from 'nanoid'
import jordan from "../data/jordan";
import yeezy from "../data/yeezy";

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
        <main className="w-full bg-green-400 px-6 py-4 flex flex-col gap-4">
            <h2 className="uppercase font-extrabold mb-4 text-2xl">jordans</h2>
            <section className="grid grid-flow-col  gap-6 overflow-x-scroll">
                {card1}
            </section>
            <h2 className="uppercase font-extrabold mb-4 text-2xl">yeezy</h2>
            <section className="grid grid-flow-col  gap-6 overflow-x-scroll">
                {card2}
            </section>
            
        </main>
    )
}