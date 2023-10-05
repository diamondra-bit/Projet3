import React from 'react'
import './Navbar-top.css'
import search2 from '../../pages/images/search.svg'
import logout from '../../pages/images/logout.svg'
import { Link } from 'react-router-dom';

function Navbartop() {
  return (
    <>
    <div className='navbar-top'>
      <div className='navbar-titre'>Liste des sorties</div>

        {/*Barre de recherche*/}
        <div className='search-bar search2'>
                  <div> <input type='text' /></div> 
                  <div  > <img src={search2} className='icone-search'/> </div>
        </div>
        <Link to='/Home'><img src={logout} className='icone-search logout'/></Link>
            
    </div>
    </>
  )
}

export default Navbartop