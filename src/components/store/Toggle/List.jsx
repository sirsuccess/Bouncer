import React from "react"

import {Laptop, LaptopHot, LaptopList} from "../../Body/BestSeller/Laptop/Laptop"

import "./LaptopGrid/LaptopGrid"


function List() {
    return(
        <div className="LaptopGrid">
            <LaptopList/>
            <LaptopList/>
            <LaptopList/>
            <LaptopList/>
            
        </div>
    )
}
export default List;