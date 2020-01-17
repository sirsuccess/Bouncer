import React from "react"


import {Laptop, LaptopHot} from "../../../Body/BestSeller/Laptop/Laptop"
import "./LaptopGrid.css"
import { array } from "prop-types"

function LaptopGrid() {
    const number = 4
    return(
        <div className="LaptopGrid">
            
            <div className="itemThree">
           <Laptop/>
            <Laptop/>
            <Laptop/>
            </div>
            <div className="itemThree">
            <Laptop/>
            <Laptop/>
            <Laptop/>
            </div>
            <div className="itemThree">
            <Laptop/>
            <Laptop/>
            <Laptop/>
            </div>
            <div className="itemThree">
            <Laptop/>
            <Laptop/>
            <Laptop/>
            </div>
            
        
        </div>
    )
}
export default LaptopGrid;