import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import ChangePassword from './components/Login/ChangePassword';
import Log from './components/Login/Log';
import Entree from './pages/Entree';
import Sortie from './pages/Sortie';
import Ajouter from './pages/Ajouter';
import Connection from './pagesDepot/Connection';
import LoginDepot from './pagesDepot/LoginDepot';
import EnregistrementsDepot from './pagesDepot/EnregistrementsDepot';
import Loginsecurite from './pages/SEcurité/Loginsecurite';
import SecuriteHome from './pages/SEcurité/SecuriteHome.js';
import SecuriteHome2 from './pages/SEcurité/SecuriteHome2.js';
import SecuriteAffichage from './pages/SEcurité/SecuriteAffichage.js';
import EntreeSec2 from './pages/SEcurité/EntreeSec2';
import SortieSec2 from './pages/SEcurité/SortieSec2';
import Sec2Affichage from './pages/SEcurité/Sec2Affichage';
import Test from './components/Test';



function App() {

  return (
    <div className="App">


    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Connection/>}></Route>

        <Route path='/LoginEmploye' element={<Log/>}></Route>
        <Route path='/LoginSecurite' element={<Loginsecurite/>}></Route>
        <Route path='/SecuriteHome' element={<SecuriteHome/>}></Route>
        <Route path='/SecuriteHome2' element={<SecuriteHome2/>}></Route>
        <Route path='/SecuriteAffichage' element={<SecuriteAffichage/>}></Route>

        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Entree' element={<Entree/>}></Route>
        <Route path='/Sortie' element={<Sortie/>}></Route>
        <Route path='/Ajouter' element={<Ajouter/>}></Route>
        <Route path='/ChangePassword' element={<ChangePassword/>}></Route>

        <Route path='/EntreeSec2' element={<EntreeSec2/>}></Route>
        <Route path='/SortieSec2' element={<SortieSec2/>}></Route>
        <Route path='/Sec2Affichage' element={<Sec2Affichage/>}></Route>

        <Route path='/LoginDepot' element={<LoginDepot/>}></Route>
        <Route path='/EnregistremetsDepot' element={<EnregistrementsDepot/>}></Route>


        <Route path='/Test' element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>



    </div>
  );
}

export default App;
