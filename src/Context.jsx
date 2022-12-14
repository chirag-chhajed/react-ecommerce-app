import React, { useState, useEffect } from "react";
import data from "./data/data";

const Context = React.createContext()

function ContextProvider({ children }) {
    const [allProducts, setAllProducts] = useState(data)
    const [cartItems, setCartItems] = useState([])

    function toggleFavorite(id) {

        const updatedArr = allProducts.map(product => {
            if (product.id === id) {

                return { ...product, isFavourite: !product.isFavourite }
            }
            return product
        })
        setAllProducts(updatedArr)
    }
    function addToCart(newProd) {
        setCartItems(prevProd => [...prevProd, newProd])
    }
    function removeFromCart(id) {
        setCartItems(prevProd => prevProd.filter(product => product.id !== id))
    }
    function emptyCart() {
        setCartItems([])
    }
    function filterCart(type) {
        let updatedArr = [...allProducts]
        setAllProducts(updatedArr.filter(product => product.type === type))
    }
    function all() {
        setAllProducts(allProducts)
    }
    return (
        <Context.Provider value={{
            allProducts,
            setAllProducts,
            toggleFavorite,
            cartItems,
            addToCart,
            removeFromCart,
            emptyCart,
            filterCart,
            all
        }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }