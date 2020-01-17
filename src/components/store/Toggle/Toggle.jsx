import React from "react"
import {Link} from "react-router-dom"

import Grid from "./LaptopGrid/LaptopGrid"
import Pagenation from "./Pagenation/Pagenation"
import './Toggle.css'

function Toggle() {
    return(
        <>
        <div className="Toggle">
        <div className="itemSide">
        <div className="item">13 Items</div> Sort By 
        
        <select name="Name" id="Name">
            <option value="Name" selected>Name</option></select>  
        <div className="show">Show</div>
        <select name="show" id="show">
            <option value="12" selected>12</option></select>  
        </div>
        <div className="toggleSide"><Link to="store-grid"><i class="fas fa-grip-horizontal"></i> </Link> <Link to="store-list"><i class="fas fa-bars"></i></Link></div>
        </div>        
        </>
    )
}

export default Toggle;