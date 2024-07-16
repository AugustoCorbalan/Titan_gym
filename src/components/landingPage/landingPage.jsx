import { useState, useEffect } from "react";
import { Navbar } from "../navbar/navbar";
import { Landing } from "./components/landing/landing";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { TimeTable } from "./components/timeTable/timeTable";
import { FooterLanding } from "./components/footerLanding/footerLanding";
import { Loader } from "./components/loader/loader";

export const LandingPage = ()=>{
    const [loaderStatus, setLoaderStatus] = useState(false);
    const [timePageLoader, setTimePageLoader] = useState(false)
    useEffect(()=>{
      window.addEventListener('DOMContentLoaded ', ()=>setLoaderStatus(true))
      setTimeout(()=>setTimePageLoader(true), 2000);
    },[])
    return(
        <div className='app_container'>
            {  (timePageLoader) ?
            <>
                <Navbar/>
                <Landing/>
                <About/>
                <Services/>
                <TimeTable/>
                <FooterLanding/>
            </> :
            <Loader/>
            }
        </div>
    )
}