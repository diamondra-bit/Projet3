import React from 'react'
import notif from '../../pages/images/notif.svg'
import Darkmode from './Darkmode'

function DarkNotif() {
  return (
    <>
        <div className='navbar-flex'>
              <Darkmode/>  
              <img src={notif} className='notif2'/>           
          </div> 
    </>
  )
}

export default DarkNotif