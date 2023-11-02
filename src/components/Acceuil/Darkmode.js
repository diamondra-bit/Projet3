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

  /*Socket*/
  const [notifications, setNotifications] = useState([]);
  const [localNotifications, setLocalNotifications] = useState([]);

  const socket = io('http://localhost:5000');
   const [notification, setNotification] = useState('');

   useEffect(() => {
    // Au chargement du composant, récupérez les notifications locales
    const localNotificationsString = localStorage.getItem('notifications');
    if (localNotificationsString) {
      const localNotificationsArray = JSON.parse(localNotificationsString);
      setLocalNotifications(localNotificationsArray);
    }
  }, []);

  useEffect(() => {

    socket.on('notification', (data) => {
      const newNotification = { message: data.message, status: 'unread' };
      const newNotifications = [...localNotifications, newNotification];
      setLocalNotifications(newNotifications);
      // Enregistrez également ces nouvelles notifications dans le stockage local
      localStorage.setItem('notifications', JSON.stringify(newNotifications));
    });

    return () => {
      socket.off('notification');
    };
  }, [localNotifications]);

  const markAsRead = (index) => {
    const updatedNotifications = [...localNotifications];
    updatedNotifications.splice(index, 1); 
    setLocalNotifications(updatedNotifications);

    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
  };

  const unreadNotifications = localNotifications.filter((notification) => notification.status === 'unread');
  
  const triggerNotification = () => {

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
          <div className="counter">{unreadNotifications.length}</div>
          {show && (
            <div className="div-notif-show">
              <div className="notif-show">

              <ul>
              {unreadNotifications.map((notification, index) => (
                <li key={index}>
                  {notification.message}
                  <button onClick={() => markAsRead(index)}>Marquer comme lu</button>
                </li>
              ))}
            </ul>


              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Darkmode;
