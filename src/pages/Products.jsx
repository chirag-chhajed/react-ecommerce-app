import React from "react";
import Card from "../Components/Card";
import data from "../data/data";
// import images from "../assets/Jordans/lows/jlow1.atif"

export default function Products(){
    const products = data.map(e => {return <Card id={e.id} 
        image={e.image}
        description={e.description} 
        brand={e.brand} 
        price={e.price} 
    />
})
    return(
        <main className="flex flex-wrap gap-4 m-2">
            {products}
        </main>
    )
}