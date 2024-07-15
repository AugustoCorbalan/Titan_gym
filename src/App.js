import {Navbar} from './components/navbar/navbar.jsx';
import {Landing} from './components/landing/landing.jsx';
import {About} from './components/about/about.jsx';
import {Services} from './components/services/services.jsx';
import {TimeTable} from './components/timeTable/timeTable.jsx';
import {Footer} from './components/footer/footer.jsx';
import {Loader} from './components/loader/loader.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [timePageLoader, setTimePageLoader] = useState(false)
  useEffect(()=>{
    window.addEventListener('load', ()=>setLoaderStatus(true))
    setTimeout(()=>setTimePageLoader(true), 1800);
  },[])
  return (
    <div className='app_container'>
      {(loaderStatus && timePageLoader)?
        <>
          <header className="App-header">  
            <Navbar/>
          </header>
          <Landing/>
          <About/>
          <Services/>
          <TimeTable/>
          <Footer/>
        </> :
        <Loader/>
      }
    </div>
  );
}

export default App;
