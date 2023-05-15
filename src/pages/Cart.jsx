import { useContext, useState } from "react";
import CartItem from "../Components/CartItem";
import { Context } from "../Context";
import Confetti from 'react-confetti'

export default function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const [confetti,useConfetti] = useState(false)
    const { cartItems, emptyCart } = useContext(Context)
    const cartProducts = cartItems.map(e => (
        <CartItem
            id={e.id}
            {...e}
        />
    ))
    console.log(cartItems)
    // const priceArray = cartItems.map(e => e.price)
    const initialValue = 0
    const totalprice = cartItems.map(e => e.price).reduce(
        (a, b) => parseInt(a) + parseInt(b),initialValue
    )
    function placeOrder() {
        useConfetti(true)
        setButtonText("Ordering")
        setTimeout(() => {
            setButtonText("Place Order")
            emptyCart()
            useConfetti(false)
        }, 5000)
    }
    // const display = cartItems.length > 0 
    //                     ? ` ${cartProducts}`
    //                     : 
    return (
        <>

            {
                cartItems.length === 0
                &&
                <h2 className="text-center text-8xl">You have no items in your cart <br />😞😞😞</h2>
            }
            {
                cartItems.length > 0
                &&
                <>
                    <div className="grid grid-cols-3 my-4 font-bold text-center">
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
                    {confetti && <Confetti/>}
                    <div className="mx-8 font-bold text-right">Total Price: Rs. {totalprice}</div>
                    <div className="my-8 text-center">
                        <button onClick={placeOrder}>
                            <span className="button_top">
                                {buttonText}
                            </span>
                        </button>
                    </div>

                </>
            }
        </>

    )
}