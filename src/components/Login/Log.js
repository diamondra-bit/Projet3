import React, { useContext, useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../pages/css/Log.css';
import main2 from '../../pages/images/main2.svg'
import img1 from '../../pages/images/img1.svg'
import img2 from '../../pages/images/img2.svg'
import hide from '../../pages/images/hide.svg'
import plant from '../../pages/images/plant.svg'
import AuthContext from '../store/authContext';
import Test from '../Test';
import jwt_decode from 'jwt-decode';


function Log() {
    const [numero,setNumero]=useState("");
    const [mdp,setMdp]=useState("");
    const authContext = useContext(AuthContext);

    const navigate= useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    
        axios.post("http://192.168.100.48:3003/logintoken", { userId: numero, })
            .then((response) => {
                if (response.data && response.data.token) {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    console.log('Token stocké localement:', token);

                    authContext.login(token);
                    navigate('/Home');
                } else {
                    console.error('Le token n\'a pas été renvoyé dans la réponse.', response);
                } 
              
            })
            .catch(err => {
                console.error('Erreur lors de la requête POST:', err);
            });
    }

    const [hidepassword,setHidepassword]=useState(false);
    const showPassword=()=>{
            setHidepassword(!hidepassword)
    }


  return (
    <>

      <div className='container'>

      <div className='cercle'> </div>
      <div className='cercle2'> </div>
      <img src={plant} className='plant2'/>
            <div className='form-container'>

                <div className='form-log'>                   
                    <form onSubmit={handleSubmit}>
                        <h1 className='title'> Se Connecter</h1>
                            <div className='input-field'>
                                <div>  <img src={img1} className='img'/></div>
                                <div> 
                                <input type='text'  placeholder='Entrer votre numéro'
                                onChange={(event)=>{setNumero(event.target.value)}}/>
                                </div>
                            </div>

                            <div className='input-field'>
                                <div>  <img src={img2} className='img'/></div>
                                <div> <input type={hidepassword ? 'text' :'password'}
                                 placeholder='Entrer votre mot de passe'
                                onChange={(event)=>{setMdp(event.target.value)}}/></div>
                                 <img src={hide} className='img img-mdp' onClick={showPassword}/>
                            </div>
               
                            <button type='submit' className='btn' >Se Connecter</button>

                            </form>
                    <Link to="/ChangePassword" className='link'>Changer votre mot de passe</Link>
                    </div>
                </div>
            </div>
       

    </>
  )
}

export default Log