import React from "react"


import List from "./List"
import Pagenation from "./Pagenation/Pagenation"
import Toggle from "./Toggle"
import './Toggle.css'

function ToggleList() {
    return(
        <>
        <Toggle/>
        <List/>
        <Pagenation/>        
        </>
    )
}

export default ToggleList;