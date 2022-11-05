import React, { useContext, useState } from "react";
import CartItem from "../Components/CartItem";
import { Context } from "../Context";

export default function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems, emptyCart } = useContext(Context)
    const cartProducts = cartItems.map(e => (
        <CartItem
            id={e.id}
            {...e}
        />
    ))
    const totalprice = cartItems.map(e => e.price).reduce(
        (a, b) => parseInt(a) + parseInt(b)
    )
    function placeOrder(){
        setButtonText("Ordering")
        setTimeout(()=>{
            setButtonText("Place Order")
            emptyCart()
        },4000)
    }
    console.log(totalprice)
    // const display = cartItems.length > 0 
    //                     ? ` ${cartProducts}`
    //                     : 
    return (
        <>
            {
                cartItems.length == 0
                &&
                <h2>You have no items in your cart <br />😞😞😞</h2>
            }
            {
                cartItems.length > 0
                &&
                <>
                <div className="grid grid-cols-3 text-center font-bold my-4">
                    <h3>Product Image</h3>
                    <h3>Description</h3>
                    <h3>Price</h3>
                </div>
                {cartProducts}
                </>
            }
            
            {
                cartItems.length > 0
                &&
                <>
                    <div className="text-right mx-8 font-bold">Total Price: Rs.{totalprice}</div>
                    <div className="text-center my-8">
                        <button onClick={placeOrder}>
                            <span class="button_top">
                                {buttonText}
                            </span>
                        </button>
                    </div>
                    
                </>
            }
        </>

    )
}