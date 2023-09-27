import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../pages/css/Log.css'
import Validation from './Function';
import main2 from '../../pages/images/main2.svg'
import img1 from '../../pages/images/img1.svg'
import img2 from '../../pages/images/img2.svg'



function Log() {
    const [numero,setNumero]=useState("");
    const [mdp,setMdp]=useState("");

    const[values,setValues]=useState({
         numero :'',
         mdp:''
    });


    const navigate= useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();

        setValues(Validation(values));

        axios.post("http://localhost:3003/login", {numero:numero,mdp:mdp} )
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

  return (
    <>

        <div className='container'>
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
                                onChange={(event)=>{setNumero(event.target.value)}}/>
                                </div>
                            </div>

                            <div className='input-field'>
                                <div>  <img src={img2} className='img'/></div>
                                <div> <input type='text' placeholder='Entrer votre mot de passe'
                                onChange={(event)=>{setMdp(event.target.value)}}/></div>
                            </div>
                            <button type='submit' className='btn'>Se Connecter</button>

                                
                            </form>
                    <Link to="/ChangePassword" className='link'>Changer votre mot de passe</Link>
                    </div>
                </div>
            </div>
      
    </>
  )
}

export default Log