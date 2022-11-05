import React,{useState,useContext} from "react";
// import { Context } from "../Context";

export default function CartItem({brand,description,price,id,image}){
    return(
        <div key={id} className="grid grid-cols-3 mx-8 my-4 ">
            <img src={image} alt="image" />
            <div className="text-center font-bold px-6 align-middle my-auto">
                <h2>{brand} </h2>
                <h3>{description}</h3>
            </div>
                <h3 className="text-center font-bold px-6 align-middle my-auto">Rs. {price}</h3>
            <br />
        </div>
    )
}