import React,{useContext} from "react";
import CartItem from "../Components/CartItem";
import { Context } from "../Context";

export default function Cart(){
    const{cartItems} = useContext(Context)
    const cartProducts = cartItems.map(e => (
        <CartItem
            id={e.id}
            {...e}  
        />
    ))
    console.log(cartItems.length)
    return(
        <>
        {
            cartItems.length > 0
                &&
            <div className="grid grid-cols-3 text-center font-bold">
                <h3>Product Image</h3>
                <h3>Description</h3>
                <h3>Price</h3>
            </div>
        }
            {cartProducts}
        </>
    )
}