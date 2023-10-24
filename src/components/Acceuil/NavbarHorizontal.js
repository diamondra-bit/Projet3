import React from 'react'
import '../../pages/css/Home.css'
import notif from '../../pages/images/notif.svg'
import Darkmode from './Darkmode'

function NavbarHorizontal() {
  return (
    <>
        <div className='navbar-horizontal'>
          <div className='utilisateur' >
              <div className='cercle-utilisateur'></div>  
              <div className='texte-utilisateur'>Bienvenue,  <span className='nom-utilisateur'>  Diamondra !</span> </div>  
          </div>  
          
          <div className='navbar-flex'>
              <Darkmode/>  
              <img src={notif} className='notif'/>           
          </div> 
      </div> 
    </>
  )
}

export default NavbarHorizontal