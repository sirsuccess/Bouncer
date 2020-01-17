import React, { useState, useEffect } from "react"

// import Bounce from "./Bounce/Bounce"
import Carousel from "./Carousel/Carousel"
import BestSeller from "./BestSeller/BestSeller"
import LoadMore from "./LoadMore/LoadMore"
import Services from "./Services/Services"
import LatestNews from "./LatestNews/LatestNews"
import Featured from "./Featured/Featured"
import SearchBody from "./SearchBody/SearchBody"
import NewsLetter from "./newsLetter/newsLetter"
import "./Body.css"

function Body() {
//     const [cash, setCash]= useState(0.01)
// const [cartItem, setCartItem]= useState(0)
const [newsletter, setNewsletter]= useState(false);

useEffect(() => {
   setTimeout(()=>{
        setNewsletter(()=>true)
        // clearTimeout(news)
    },2000);
}, []);

    return(
        <div>
            {/* <Bounce/> */}
            <Carousel/>
            {/* <BestSeller cartItem={cartItem} setCartItem={setCartItem}/> */}
            <BestSeller/>
            <LoadMore/>
            <Services/>
            <LatestNews/>
            <Featured/>
            <SearchBody/>
            {newsletter?<NewsLetter setNewsletter={setNewsletter} newsletter={newsletter}/>:""}
        </div>
    )
}

export default Body;