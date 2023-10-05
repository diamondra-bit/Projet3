import React from 'react'
import { Link } from 'react-router-dom';
import home from '../../pages/images/home.svg'
import computer from '../../pages/images/computer.svg'
import person from '../../pages/images/person.svg'
import out from '../../pages/images/out2.svg'
import logo from '../../pages/images/logo.png'
import list from '../../pages/images/list.svg'


function Navbar() {
  return (
    <>
    <div className='container-navbar-left'> 
            <div className='container-logo'> 
            <img src={logo} className='logo'/>
            <h1 className='title-logo'>WizFlow</h1>
              </div>

              <div  className='container-center'>
                <img src={home} className='image-icone'/>
                <Link to="/Home" className='container-link'>Acceuil</Link>
              </div>

            <div>
             
                <div  className='container-center'>
                    <img src={computer} className='image-icone'/>
                    <Link to="/Entree" className='container-link'>Entrées</Link>
                  </div>
                  <div  className='container-center'>
                    <img src={out} className='image-icone sortie'/>
                    <Link to="/Sortie" className='container-link '>Sorties</Link>
                  </div>

            <div>
                  <div  className='container-center'>
                    <img src={list} className='image-icone'/>
                    <Link to="/SecuriteAffichage" className='container-link'>Liste</Link>
                  </div>

                  <div  className='container-center'>
                    <img src={person} className='image-icone'/>
                    <Link to="/" className='container-link'>Retour</Link>
                  </div>


            </div>
            </div>
             
        </div>
   
    </>
  )
}

export default Navbar