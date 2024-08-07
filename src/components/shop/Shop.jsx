import { Navbar } from "../navbar/navbar.jsx";
import {Footer} from "../footer/footer.jsx";
import { ContainerCards } from "./components/containerCards.jsx";
import { useEffect } from "react";

export const Shop = ()=>{
    return(
        <>
            <Navbar/>
            <div className="shop_container">
                <ContainerCards/>
            </div>
            <Footer/>
        </>
    )
}