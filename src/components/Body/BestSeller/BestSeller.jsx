import React from "react"

import "./BestSeller.css"
import {Laptop, LaptopHot} from "./Laptop/Laptop"

// const {LaptopHot, Laptop} = Laptops
function BestSeller({cartItem, setCartItem}) {
    return(
        <div className="bestSeller">
        <h1>BEST SELLER</h1>
        <ul>
            <li>All</li>
            <li>Mac</li>
            <li>iPhone</li>
            <li>iPad</li>
            <li>Accessories</li>
        </ul>
        <div className="laptopLine1">

        <LaptopHot cartItem={cartItem} setCartItem={setCartItem}/>
        <Laptop cartItem={cartItem} setCartItem={setCartItem}/>
        <Laptop cartItem={cartItem} setCartItem={setCartItem}/>
        <LaptopHot cartItem={cartItem} setCartItem={setCartItem}/>
        </div>
        <div className="laptopLine1">

        <Laptop cartItem={cartItem} setCartItem={setCartItem}/>
        <Laptop cartItem={cartItem} setCartItem={setCartItem}/>
        <Laptop cartItem={cartItem} setCartItem={setCartItem}/>
        <Laptop cartItem={cartItem} setCartItem={setCartItem}/>
        </div>
        </div>
    )
}

export default BestSeller;