import {Navbar} from './components/navbar/navbar.jsx';
import {Landing} from './components/landing/landing.jsx';
import {About} from './components/about/about.jsx';
import {Services} from './components/services/services.jsx';
import {TimeTable} from './components/timeTable/timeTable.jsx';
import {Footer} from './components/footer/footer.jsx';

function App() {
  return (
    <div className='app_container'>
      <header className="App-header">  
        <Navbar/>
      </header>
      <Landing/>
      <About/>
      <Services/>
      {/* <TimeTable/>
      <Footer/> */}
    </div>
  );
}

export default App;
