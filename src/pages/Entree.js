import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Acceuil/Navbar'
import Darkmode from '../components/Acceuil/Darkmode'
import axios from 'axios';
import {format} from 'date-fns'
import '../pages/css/Entree.css'
import search from '../pages/images/search.svg'

function Entree() {
  const [nom,setNom]=useState("");
  const [nombre,setNombre]=useState(0);
  const [id,setId]=useState("");
  const [currentDate,setCurrentDate]=useState(new Date());
  const [list,setList]=useState([]);
  const navigate= useNavigate();
 
    /*Recuperer la date actuelle*/
  useEffect( ()=>{
    const intervalId= setInterval(()=>{
        setCurrentDate(new Date()); },1000);

        return ()=>{clearInterval(intervalId);}
  },[] )

  const hours=currentDate.getHours();
  const mn=currentDate.getMinutes();
  
     /*Insérer les matériaux*/
     const handleSubmit= (event)=>{
      axios.post("http://localhost:3002/insert",{nom:nom,nombre:nombre,heure_ent:currentDate,id:id})
      .then( (res)=>{
        if(res.data=== "Mandeha")
        {
         navigate('/Home');
        }else{
         alert("Matériel non ajouté")
        }
     })
     .catch(err => console.log(err))
  }

     /*Afficher les matériaux*/
   const listMateriel=()=>{
    axios.get("http://localhost:3002/read")
    .then((response)=>{
      setList(response.data)
    })
    .catch (err => console.log(err))
   }

  return (
    <>
    <div className='container-home'>
      <div  className='navbar'> <Navbar/></div>

      <div>
            <Darkmode/>

            <div className='container-inline'>

              <div className='inline-add'>
                <div className='link-button'>Matériel</div>
                <div>Ajouter des matériels</div>
              </div>

              <div className='search-bar'>
               <div> <input type='text' placeholder='Rechercher'/></div> 
               <div><img src={search} className='icone-search'/></div>
              </div>
                
            </div>
       {/*   <p>{`${hours}:${mn}`}</p>

            <form onSubmit={handleSubmit}>
              <label>Nom matériel</label>
              <input type='text' onChange={(event)=>{setNom(event.target.value)}}/>
              <label>Nombre </label>
              <input type='number' onChange={(event)=>{setNombre(event.target.value)}}/>
              <label>Id utilisateur</label>
              <input type='number'  onChange={(event)=>{setId(event.target.value)}}/>

              <button type='submit'>Ajouter</button>

            </form>

            <button  onClick={listMateriel}>Afficher</button>

            <table>
              <thead>
                <th>Nom</th>
                <th>Nombre</th>
                <th>Date</th>
                <th>Heure</th>
                <th>Utilisateur</th>
              </thead>

              <tbody>
         
              {
              list.map((val,key)=>(
              <tr>
                  <td>{val.nom_ent}</td>
                  <td>{val.nbr_ent}</td>     
                  <td>{format(new Date(val.heure_ent),'dd-MM-yyyy')}</td>
                  <td>{format(new Date(val.heure_ent),'HH:mm')}</td>
                  <td>{val.id}</td>
              </tr>
        ))}
              </tbody>
            </table>*/}
      </div>
    </div>
    </>
  )
}

export default Entree