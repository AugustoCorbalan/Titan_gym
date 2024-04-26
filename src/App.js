import {Navbar} from './components/navbar/navbar.jsx';
import {Landing} from './components/landing/landing.jsx';
import {About} from './components/about/about.jsx';
function App() {
  return (
    <div className='app_container'>
      <header className="App-header">  
        <Navbar/>
      </header>
      <Landing/>
      <About/>
    </div>
  );
}

export default App;
