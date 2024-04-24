import {Navbar} from './components/navbar/navbar.jsx';
import {Landing} from './components/landing/landing.jsx';
function App() {
  return (
    <div className='app_container'>
      <header className="App-header">  
        <Navbar/>
      </header>
      <Landing/>
    </div>
  );
}

export default App;
