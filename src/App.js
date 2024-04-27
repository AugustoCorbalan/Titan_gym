import {Navbar} from './components/navbar/navbar.jsx';
import {Landing} from './components/landing/landing.jsx';
import {About} from './components/about/about.jsx';
import { Services } from './components/services/services.jsx';
function App() {
  return (
    <div className='app_container'>
      <header className="App-header">  
        <Navbar/>
      </header>
      <Landing/>
      <About/>
      <Services/>
    </div>
  );
}

export default App;
