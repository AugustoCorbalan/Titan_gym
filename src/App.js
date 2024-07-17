import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/landingPage/landingPage.jsx';
import { Shop } from './components/shop/Shop.jsx';

function App() {
 
  return (
    <Routes>
      <Route path='/' element={ <LandingPage/>}/>
      <Route path='/tiendaTitan' element={ <Shop/> }/>
    </Routes>
  );
}

export default App;
