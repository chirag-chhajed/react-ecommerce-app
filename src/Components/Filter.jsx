// import React,{useContext} from "react";
// import { Context } from "../Context";

// export default function Filter(){
//     const {filterCart,all} = useContext(Context)
//     return(
//         <div className="flex flex-row justify-evenly flex-wrap w-full h-auto">
//             <button onClick={()=>all()} className="bg-background m-4 p-4">All</button>
//             <button onClick={()=>filterCart("Jordans Low")} className="bg-background  m-4 p-4">Jordan Lows</button>
//             <button onClick={()=>filterCart("Jordans Mid")} className="bg-background  m-4 p-4">Jordan Mids</button>
//             <button className="bg-background  m-4 p-4">Jordan Highs</button>
//             <button className="bg-background  m-4 p-4">Dunk Low</button>
//             <button className="bg-background  m-4 p-4">Dunk Highs</button>
//             <button className="bg-background  m-4 p-4">Yeezy 380s</button>
//             <button className="bg-background  m-4 p-4">Yeezy 700s</button>
//         </div>
//     )
// }