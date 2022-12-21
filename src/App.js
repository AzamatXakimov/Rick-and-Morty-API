import './App.css';
import {Route, Routes} from "react-router-dom";
import { Home } from './Pages/Home/Home';

function App() {

  return (
    <>
      <div className='container-costom'>
        <h1 className="rick-and-morty-title mt-5 text-center">The Rick adn Morty</h1>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>

  )
}

export default App;
