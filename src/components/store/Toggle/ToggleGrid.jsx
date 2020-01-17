import React from "react"


import Grid from "./LaptopGrid/LaptopGrid"
import Pagenation from "./Pagenation/Pagenation"
import Toggle from "./Toggle"
import './Toggle.css'

function ToggleGrid() {
    return(
        <>
        <Toggle/>
        <Grid/>
        <Pagenation/>        
        </>
    )
}

export default ToggleGrid;