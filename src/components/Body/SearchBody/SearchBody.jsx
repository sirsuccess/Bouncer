import React from "react"

import "./SearchBody.css"

function SearchBody() {
 return (
     <div className="SearchBody">
         <input type="text" className="inputSearch" placeholder="Search Query..."/>
         <button className="btnSearch">Search</button>
     </div>
 )
}   


export default SearchBody;