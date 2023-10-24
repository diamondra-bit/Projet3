import React, { useState } from 'react'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../pages/css/Log.css';
import main2 from '../../pages/images/main2.svg'
import img1 from '../../pages/images/img1.svg'
import img2 from '../../pages/images/img2.svg'
import hide from '../../pages/images/hide.svg'
import plant from '../../pages/images/plant.svg'


function Log() {
    const [numero,setNumero]=useState("");
    const [mdp,setMdp]=useState("");

    const navigate= useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();

        axios.post("http://192.168.100.48:3003/login", {numero:numero,mdp:mdp} )
        .then( (res)=>{
           if(res.data=== "Success")
           {
            navigate('/Home')
           }else{
            alert("Utilisateur non enregistré")
           }
        })
        .catch(err => console.log(err))
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
       

     {/*    <div className='container'>
            <div className='form-container'> 
                <div className='form-text'>
                        <img src={main2} className='main'/>
                </div>

                <div className='form-log'>                   
                    <form onSubmit={handleSubmit}>
                        <h1 className='title'> Se Connecter</h1>
                            <div className='input-field'>
                                <div>  <img src={img1} className='img'/></div>
                                <div> 
                                <input type='text'  placeholder='Numéro'
                                onChange={(event)=>{setNumero(event.target.value)}}/>
                                </div>
                            </div>

                            <div className='input-field'>
                                <div>  <img src={img2} className='img'/></div>
                                <div> <input type='text' placeholder='Mot de passe'
                                onChange={(event)=>{setMdp(event.target.value)}}/></div>
                            </div>
                            <button type='submit' className='btn'>Se Connecter</button>

                                
                            </form>
                    <Link to="/ChangePassword" className='link'>Changer votre mot de passe</Link>
                    </div>
            </div>
       </div>*/}
    </>
  )
}

export default Log