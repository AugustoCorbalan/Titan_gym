import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../../utils/globalProvider";
import { Navbar } from "../navbar/navbar";
import { Landing } from "./components/landing/landing";
import { About } from "./components/about/about";
import { Services } from "./components/services/services";
import { TimeTable } from "./components/timeTable/timeTable";
import { FooterLanding } from "./components/footerLanding/footerLanding";
import { Loader } from "./components/loader/loader";

export const LandingPage = ()=>{
    const location = useLocation();

    const [timePageLoader, setTimePageLoader] = useState(false)
    const {state, setState} = useContext(GlobalContext);
    console.log("firstLoader", state.firstLoader)
  useEffect(() => {
      if (location.hash) {
          const section = location.hash.substring(1);
          const sectionElement = document.getElementById(section);
          if (sectionElement) {
              const sectionTop = sectionElement.getBoundingClientRect().top;
              const scrollWindow = window.scrollY;
              window.scrollTo(0, sectionTop + scrollWindow);
            }
        }
    }, [location]);
    useEffect(()=>{
        if(state.firstLoader){
            document.body.style.overflowY = 'hidden';
            const handlerTime = ()=>{
                setTimePageLoader(true);
                setState({...state, firstLoader: false})
                document.body.style.overflowY = 'initial';
            }
            setTimeout(()=> handlerTime(), 2000);
        }
    },[])
    return(
        <div className='app_container'>
            {
                state.firstLoader?
                <Loader status={!timePageLoader}/> :
                <></>
            }
            <>
                <Navbar/>
                <Landing/>
                <About/>
                <Services/>
                <TimeTable/>
                <FooterLanding/>
            </> 
        </div>
    )
}