import React from "react";
// import images from '../assets/Jordans/lows/jlow1.avif'

export default function Card(props) {
    
    const {brand,description,price,id,image} = props
    return (
        <div key={id} className="h-96 w-72 bg-cardbg rounded-2xl pt-4 flex flex-col gap-4">
            <div className="h-40 w-64  mx-auto rounded-md">
                <img src={image} className="h-full w-full object-contain " />
            </div>
            <div className="text-center font-bold px-6">
                <h2>{brand}</h2>
                <h3>{description}</h3>
                <br />
                <h3 className="text-left">Rs. {price}</h3>
            </div>
            <div className="flex gap-4 justify-center">
                <button><i class="ri-add-circle-line ri-2x"></i></button>
                <button><i class="ri-heart-line ri-2x"></i></button>
            </div>

        </div>



    );
}
// Nike
// Air Jordan 1 Low SE Crater Grey University Blue
// Rs. 14,999.00Nike
