import React, { useContext } from "react";
import { Context } from "../Context";
// import images from '../assets/Jordans/lows/jlow1.avif'

export default function Card(props) {
    const { brand, description, price, id, image, isFavourite } = props
    const { toggleFavorite, cartItems, addToCart, removeFromCart } = useContext(Context)
    const heartIcon = isFavourite
        ? <i className="ri-heart-fill ri-2x favourite" onClick={() => toggleFavorite(id)}></i>
        : <i className="ri-heart-line ri-2x" onClick={() => toggleFavorite(id)}></i>

    function cartIcon() {
        const alreadyInCart = cartItems.some(product => product.id === id)
        if (alreadyInCart) {
            return <i onClick={() => removeFromCart(id)} className="ri-indeterminate-circle-line ri-2x"></i>
        } else {
            return <i onClick={() => addToCart(props)} className="ri-add-circle-line ri-2x"></i>
        }
    }



    return (
        <div key={id} className="h-auto w-72 bg-white rounded-2xl pt-4 flex flex-col gap-4 border-[3px] border-black card">
            <div className="w-64 h-40 mx-auto rounded-md">
                <img src={image} className="object-contain w-full h-full" />
            </div>
            <div className="flex flex-col gap-2 py-4 mx-6 font-bold text-center rounded-lg text-fontcolor bg-cardbg">
                <h2>{brand}</h2>
                <h3>{description}</h3>
                <h3>Rs. {price}</h3>
            </div>
            <div className="flex justify-center gap-4">
                {heartIcon}
                {cartIcon()}
            </div>

        </div>



    );
}
