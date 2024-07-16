import { Navbar } from "../navbar/navbar.jsx"
import { ContainerCards } from "./components/containerCards.jsx"
export const Shop = ()=>{
    return(
        <>
            <Navbar/>
            <div className="shop_container">
                <ContainerCards/>
            </div>
        </>
    )
}