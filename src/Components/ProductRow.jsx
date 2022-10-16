import React from "react";

export default function ProductRow({brand,card}){
    return(
        <div>
            <h2 className="uppercase font-extrabold mb-4 text-2xl">{brand}</h2>
            <section className="grid grid-flow-col  gap-6 overflow-x-scroll auto-cols-auto">
                {card}
            </section>
        </div>
    )
}