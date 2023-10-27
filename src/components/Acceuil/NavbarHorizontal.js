import React, { useEffect, useState,useContext } from 'react'
import '../../pages/css/Home.css'
import notif from '../../pages/images/notif.svg'
import Darkmode from './Darkmode'
import axios from 'axios';
import AuthContext from '../store/authContext';

function NavbarHorizontal() {
  const [firstName, setFirstName] = useState(null);
  const [lastname, setLastname] = useState(null);
  const authContext = useContext(AuthContext);

  useEffect(()=>{
    const userId = authContext.userId;

    console.log(userId);
    axios.get(`http://192.168.100.48:3003/nomUser/${userId}`) // Assurez-vous que l'URL correspond à votre endpoint côté serveur.
    .then((response) => {
      if (response.data) {
        setLastname(response.data.lastname);
        setFirstName(response.data.firstname);
      } else {
        console.error('Nom d\'utilisateur non trouvé.', response);
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la requête:', error);
    });
  },[])

  return (
    <>
        <div className='navbar-horizontal'>
          <div className='utilisateur' >
              <div className='cercle-utilisateur'></div>  
              <div className='texte-utilisateur'>Bienvenue , <span className='nom-utilisateur'>
                {firstName ? (
                    <p>{firstName} {lastname}</p>
                  ) : (
                    <p></p>
                  )}
      </span> </div>  
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