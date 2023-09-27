import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import ChangePassword from './components/Login/ChangePassword';
import Log from './components/Login/Log';
import Entree from './pages/Entree';
import Sortie from './pages/Sortie';
import Ajouter from './pages/Ajouter';
import Connection from './pages-depot/Connection';

function App() {


  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Log/>}></Route>
      <Route path='/Login' element={<Log/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Entree' element={<Entree/>}></Route>
      <Route path='/Sortie' element={<Sortie/>}></Route>
      <Route path='/Ajouter' element={<Ajouter/>}></Route>
      <Route path='/ChangePassword' element={<ChangePassword/>}></Route>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
