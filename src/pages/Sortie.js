import React from 'react'
import Navbar from '../components/Acceuil/Navbar'
import Darkmode from '../components/Acceuil/Darkmode'

function Sortie() {
  return (
    <>
    <div className='container-home'>
        <div className='navbar'><Navbar/></div>

        <div><Darkmode/>
          
        </div>
    </div>

    </>
  )
}

export default Sortie