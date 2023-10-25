import React, { useState } from 'react'
import main2 from '../../pages/images/main2.svg'
import img1 from '../../pages/images/img1.svg'
import img2 from '../../pages/images/img2.svg'
import hide from '../../pages/images/hide.svg'
import plant from '../../pages/images/plant.svg'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Loginsecurite() {
    const [id_securite,setId_securite]=useState("");
    const [mot_de_passe,setMot_de_passe]=useState("");

    const navigate= useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();

        axios.post("http://192.168.100.48:3003/loginSecurite", {id_securite:id_securite,mot_de_passe:mot_de_passe} )
        .then( (res)=>{
           if(res.data=== "Securite1")
           {
            navigate('/SecuriteHome')
           }else if (res.data=== "Securite2"){
            navigate('/SecuriteHome2')
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

                <div className='form-text'>
                   <h1>WizFlow</h1>
                     <div className='text'>
                      Simplifiez la gestion des entrées et sorties de vos matériels en toute efficacité avec notre application
                      GED 
                    </div> 

                     <img src={main2} className='main'/>
                </div>

                <div className='form-log'>                   
                    <form onSubmit={handleSubmit}>
                        <h1 className='title'> Se Connecter</h1>
                            <div className='input-field'>
                                <div>  <img src={img1} className='img'/></div>
                                <div> 
                                <input type='text'  placeholder='Entrer votre numéro'
                                onChange={(e)=>{setId_securite(e.target.value)}}
                                />
                                </div>
                            </div>

                            <div className='input-field'>
                                <div>  <img src={img2} className='img'/></div>
                                <div> <input type={hidepassword ? 'text' :'password'}
                                 placeholder='Entrer votre mot de passe'
                                 onChange={(e)=>{setMot_de_passe(e.target.value)}}/>
                                </div>
                              <img src={hide} className='img img-mdp' onClick={showPassword}/>
                            </div>
                            <button type='submit' className='btn'>Se Connecter</button>

                                
                            </form>
                   
                    </div>
                </div>
            </div>
    </>
  )
}

export default Loginsecurite