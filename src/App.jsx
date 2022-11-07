import React, { useEffect } from "react";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
// import Filter from "./Components/Filter";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://buttons.github.io/buttons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      {/* <Filter/> */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
