import React from "react";
import Shoe from '../assets/shoe.png'

export default function Header(){
    return(
        <header className="w-full flex justify-between px-4 py-2 bg-header">
            <div className="flex justify-center gap-3 align-middle ">
                <img src={Shoe} alt="logo" className="h-20" />
                <h2 className="text-2xl font-raleway text-headerfont font-bold">Shoe <br/>Lovers</h2>
            </div>
            <button className="bg-white p-1 rounded-lg transition hover:scale-110"><i class="gg-shopping-cart"></i></button>
        </header>
    );
}