import React from 'react'
import notif from '../../pages/images/notif.svg'
import { useState,useEffect } from 'react';
import { io } from "socket.io-client";

function Darkmode() {
    const socket = io('http://localhost:5000'); // Remplacez l'URL par celle de votre serveur socket
    const [notification, setNotification] = useState("");
    const[show,setShow]=useState(false);

     /*Notifications*/
    
     useEffect(() => {
      socket.emit('notification', { message: 'RANDRIAMBOAVONJY Hery a effectué une sortie!' });

      socket.on('notification', (data) => {
        setNotification(data.message);
      });
  
      return () => {
        socket.off('notification');
      };
    }, []); 

    const showNotif=()=>{
      setShow(!show);
    }


/*Darkmode*/
    const darkMode=()=>{
        document.querySelector("body").setAttribute("data-theme","dark");
      };
      const lightMode=()=>{
        document.querySelector("body").setAttribute("data-theme","light");
      };
    
      const toggleTheme=(e)=>{
        if (e.target.checked) {darkMode()}
        else {lightMode()};
      };
    
  return (
    <>
        <div className='settings'>
             <div>
                <input type='checkbox' id="check" onChange={toggleTheme}/>
                <label for="check" className='button'></label>
              </div>

              <div>
                <img src={notif} className='notif2' onClick={showNotif}/>  
                <div className='counter'>2</div> 
                  {show && 
                    <div className="div-notif-show"> 
                      <div className="notif-show">
                        {notification}
                      </div> 
                      <div className="notif-show">
                        {notification}
                      </div>
                      <div className="notif-show">
                        {notification}
                      </div>
                  </div>}
              </div>
          </div>
    </>
  )
}

export default Darkmode