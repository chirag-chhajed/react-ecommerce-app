import React from "react";

export default function CartItem(props){
    return(
        <div className="flex flex-row">
            <img src={props.image} alt="image" />
            <div>
                <h2>{props.brand} </h2>
                <h3>{props.description}</h3>
            </div>
        </div>
    )
}