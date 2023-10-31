import React, { useState, useEffect, useContext } from 'react';
import notif from '../../pages/images/notif.svg';
import { io } from 'socket.io-client';
import AuthContext from '../store/authContext';
import axios from 'axios';

function Darkmode() {
  const [show, setShow] = useState(false);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const authContext = useContext(AuthContext);

  const [username, setUsername] = useState('');

  useEffect(() => {
    const userId = authContext.userId;

    axios.get(`http://192.168.100.48:3003/nomUser/${userId}`)
      .then((response) => {
        if (response.data) {
          setLastName(response.data.lastname);
          setFirstName(response.data.firstname);
          setUsername(response.data.firstname);
        } else {
          console.error('Nom d\'utilisateur non trouvé.', response);
        }
      })
      .catch((error) => {
        console.error('Erreur lors de la requête:', error);
      });

    return () => {
     
    };
  }, [authContext.userId]);
  const [notifications, setNotifications] = useState([]);
  const socket = io('http://localhost:5000');
   const [notification, setNotification] = useState('');

  useEffect(() => {
    socket.on('notification', (data) => {
      setNotification(data.message);
    });

    return () => {
      socket.off('notification');
    };
  }, []);

  const triggerNotification = () => {
    const username = 'UtilisateurExemple'; // Remplacez par le nom de l'utilisateur
    socket.emit('trigger-notification', username);
  };



  const showNotif = () => {
    setShow(!show);
  };

  /* Dark Mode */
  const darkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  };

  const lightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      darkMode();
    } else {
      lightMode();
    }
  };

  return (
    <>
      <button onClick={triggerNotification}>icu</button>
      <div className="settings">
        <div>
          <input type="checkbox" id="check" onChange={toggleTheme} />
          <label htmlFor="check" className="button"></label>
        </div>

        <div>
          <img src={notif} className="notif2" onClick={showNotif} />
          <div className="counter">{notifications.length}</div>
          {show && (
            <div className="div-notif-show">
              <div className="notif-show">
                <p>{notification}</p>
                {/* 
                <ul>
                  {
                  notifications.map((notification, index) => (
                    <li key={index}>fd{notification}</li>
                  ))}
                </ul>*/}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Darkmode;
