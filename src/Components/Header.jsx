import React, { useContext } from "react";
import Shoe from '../assets/shoe.png'
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Header() {
    const { cartItems } = useContext(Context)

    const cartLogo = cartItems.length > 0
        ? <i className="ri-shopping-cart-fill ri-2x white"></i>
        : <i className="ri-shopping-cart-line ri-2x white"></i>

    return (
        <header className="w-full flex justify-between px-4 py-2 bg-header sticky top-0">
            <Link to="/">
                <div className="flex justify-center gap-3 align-middle ">
                    <img src={Shoe} alt="logo" className="h-20" />
                    <h2 className="text-2xl font-raleway text-headerfont font-bold">Sneaker <br />Culture</h2>
                </div>
            </Link>
            <Link to="/cart">
                {cartLogo}
            </Link>
        </header>
    );
}