import React, { useContext } from "react";
import Shoe from '../assets/shoe.png'
import { Link } from "react-router-dom";
import { Context } from "../Context";

export default function Header() {
    const { cartItems, favourites } = useContext(Context);
    console.log(favourites)

    const cartLogo = cartItems.length > 0
        ? <i className="ri-shopping-cart-fill ri-2x white"></i>
        : <i className="ri-shopping-cart-line ri-2x white"></i>
    
    const favourtieLogo =
      favourites.length > 0 
      ? <i className="ri-heart-fill ri-2x favourite"></i>
      : <i className="ri-heart-line ri-2x white"></i>
      

    return (
      <header className="sticky top-0 flex items-center justify-between px-4 py-2 bg-header">
        <Link to="/">
          <div className="flex justify-center gap-3 align-middle ">
            <img src={Shoe} alt="logo" className="h-20" />
            <h2 className="text-2xl font-bold font-raleway text-headerfont">
              Sneaker <br />
              Culture
            </h2>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/cart">{cartLogo}</Link>
          <Link to="/favourites">{favourtieLogo}</Link>
        </div>
      </header>
    );
}