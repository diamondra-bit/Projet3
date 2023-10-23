
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img1 from '../../pages/images/img1.svg'
import img2 from '../../pages/images/img2.svg'
import main3 from '../../pages/images/main3.svg'

import '../../pages/css/Change.css'
import './Function'

function ChangePassword() {
    const [numero,setNumero]=useState("");
    const [mdp,setMdp]=useState("");

    const navigate= useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("http://192.168.100.48:3003/change", {mdp:mdp,numero:numero} )
        .then( (res)=>{
           if(res.data=== "Success")
           {
            navigate('/LoginEmploye')
           }else{
            alert("Mot de passe non changé")
           }
        })
        .catch(err => console.log(err))
    }

  return (
    <>
      {/*<div className='container'>
            <div className='form-container'>
                <div className='signin'>

                <form onSubmit={handleSubmit} className='sign-in-form'>
                    <h2>Bienvenue</h2>
 
                    <div className='input-field'>
                        <div>  <img src={img1} className='img'/></div>
                        <div> <input type='text' placeholder='Entrer votre numéro'
                        onChange={(event)=>{setNumero(event.target.value)}}/></div>
                    </div>

                    <div className='input-field'>
                        <div>  <img src={img2} className='img'/></div>
                        <div> <input type='text' placeholder='Entrer votre mot de passe'
                        onChange={(event)=>{setMdp(event.target.value)}}/></div>
                    </div>
                    <button type='submit' className='btn'>Submit</button>
                </form>
                </div>
            </div>

            <div className='panels-container2'>
                <img src={img5} className='main2'/>    
            </div> 
        </div>*/ }  

<div className='container'>
            <div className='form-container'>

                <div className='form-text'>
                   <h1>StockWiz</h1>
                     <div className='text'>
                      Simplifiez la gestion des entrées et sorties de vos matériels en toute efficacité avec notre application StockWiz
                    </div> 

                     <img src={main3} className='main'/>
                </div>

                <div className='form-log'>                   
                    <form onSubmit={handleSubmit}>
                            <h1 className='title'> Se Connecter</h1>
                            <div className='input-field'>
                            <div>  <img src={img1} className='img'/></div>
                            <div> <input type='text' placeholder='Entrer votre numéro'
                            onChange={(event)=>{setNumero(event.target.value)}}/></div>
                        </div>

                        <div className='input-field'>
                            <div>  <img src={img2} className='img'/></div>
                            <div> <input type='text' placeholder='Votre nouveau mot de passe'
                            onChange={(event)=>{setMdp(event.target.value)}}/></div>
                        </div>

                        <button type='submit' className='btn'>Se Connecter</button>             
                     </form>
             </div>
                </div>
            </div>
      
    </>
  )
}

export default ChangePassword