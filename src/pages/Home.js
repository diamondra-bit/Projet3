import React from 'react'
import Navbar from '../components/Acceuil/Navbar'
import Darkmode from '../components/Acceuil/Darkmode'
import monitor from '../pages/images/monitor.svg'
import input from '../pages/images/in.svg'
import out from '../pages/images/out.svg'
import '../pages/css/Home.css'

function Home() {
  return (
    <>
    <div className='container-home'>
      <div className='navbar'>
      <Navbar/>
      </div>

      <div>
            <Darkmode/>

            <div className='main-card'>
              <div className='card card1'>
                <div className='title-card1'><p>100 <br/> <br/> <span>Matériels</span></p></div>
                <div><img src={monitor} className='image-card' /></div>
              </div>
              <div className='card card1'>
                <div className='title-card1'><p>50  <br/> <br/> <span>Entrées</span></p></div>
                <div><img src={input} className='image-card' /></div>
              </div>
              <div className='card card1'>
                <div className='title-card1'><p>50  <br/> <br/> <span>Sorties</span></p></div>
                <div><img src={out} className='image-card' /></div>
              </div>
            </div>

            <div>
              <div className='card2'></div>
            </div>

            <h1 className='title-card3'>Historique</h1>
            <div className='main-card'>
              <div className='card3'>

              </div>
              <div className='card3'>
               
              </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default Home