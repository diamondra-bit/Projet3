import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function SecuriteHome() {
  const [nom_sec,setNom_sec]=useState("");
  const [id_sec,setId_sec]=useState("");
  const [id_sort,setId_sort]=useState("");
  const [voiture_id,setVoiture_id]=useState("");
 
  const [transport_sec,setTransport_sec]=useState("");
  const [heure_sort_sec,setHeure_sort_sec]=useState(new Date());

  const handleSubmit=()=>{
    axios.put(`http://192.168.100.48:3003/sortieSec1/`,{id_sec:id_sec,id_sort:id_sort})
    axios.put(`http://192.168.100.48:3003/sortieSec2`,{nom_sec:nom_sec,id_sort:id_sort})   
    axios.put(`http://192.168.100.48:3003/sortieSec3`,{transport_sec:transport_sec,id_sort:id_sort})
    axios.put(`http://192.168.100.48:3003/sortieSec4`,{voiture_id:voiture_id,id_sort:id_sort})
    axios.put(`http://192.168.100.48:3003/sortieSec5`,{id_sort:id_sort})
    axios.put(`http://192.168.100.48:3003/sortieSecHeure`,{heure_sort_sec:heure_sort_sec,id_sort:id_sort})

    .catch(err=>console.log(err))
    navigate('/SecuriteAffichage')
  }

  const navigate=useNavigate();
  const toggleModal=()=>{
    navigate('/LoginSecurite');    
  }
 
  useEffect(()=>{
    const intervalId=setInterval(()=>{
        setHeure_sort_sec(new Date())
    },1000)
    return ()=>{clearInterval(intervalId)}
  },[])
  
  return (
    <>
        <div className='modal'>
                          <div className='overlay overlay-security'></div>
                              <div className='modal-content modal-content-security'>
                                  <div className='form-add'>
                                    <h2>Confirmez la sortie</h2>
                                    <form >
                                    <label>Numéro du matériel</label>
                                        <input type='number' 
                                        onChange={(e)=>{setId_sort(e.target.value)}} />
                                             
                                      <label>Numéro du responsable du transport</label>
                                        <input type='number' 
                                        onChange={(e)=>{setId_sec(e.target.value)}} />
                                        <label>Nom du responsable du transport</label>
                                        <input type='text'
                                        onChange={(e)=>{setNom_sec(e.target.value)}}/>
                                        <label>Moyens de transport</label>
                                        <input type='text' 
                                        onChange={(e)=>{setTransport_sec(e.target.value)}} />    
                                      <label>Immatriculation</label>
                                        <input type='text' 
                                        onChange={(e)=>{setVoiture_id(e.target.value)}} />
                                        <div className='btn-div-modal'>
                                          <button className='btn-modal' type='submit'  onClick={()=>handleSubmit( )}>Ajouter</button>
                                          <button className='btn-modal'onClick={toggleModal} >Fermer</button>
                                      </div>
                                       
                                        
                                    </form>
                              </div>           
                          </div>
                      </div>     
    </>
  )
}

export default SecuriteHome