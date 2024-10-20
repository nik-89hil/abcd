
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './screens/Home'





function App() {
  return (
   <>
   
   <BrowserRouter>
    <Routes >
      <Route exact path='/'  element={<Home/>}/>
    </Routes>
    </BrowserRouter>
   
   </>
  );
}

export default App;
