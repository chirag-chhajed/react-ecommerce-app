import React,{useContext} from "react";
import Shoe from '../assets/shoe.png'
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Header() {
    const {cartItems} = useContext(Context)
    
    const cartLogo = cartItems.length > 0 
                        ? <i class="ri-shopping-cart-fill ri-2x"></i>
                        : <i class="ri-shopping-cart-line ri-2x"></i>

    return (
        <header className="w-full flex justify-between px-4 py-2 bg-header">
            <Link to="/">
                <div className="flex justify-center gap-3 align-middle ">
                    <img src={Shoe} alt="logo" className="h-20" />
                    <h2 className="text-2xl font-raleway text-headerfont font-bold">Shoe <br />Lovers</h2>
                </div>
            </Link>
            <Link to="/cart">
                {cartLogo}
            </Link>
        </header>
    );
}