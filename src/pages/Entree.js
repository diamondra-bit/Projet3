import React, { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../components/Acceuil/Navbar'
import Darkmode from '../components/Acceuil/Darkmode'
import axios from 'axios';
import {format} from 'date-fns'
import '../pages/css/Entree.css'
import search from '../pages/images/search.svg'
import add from '../pages/images/add.svg'

function Entree() {
  const [nom,setNom]=useState("");
  const [nombre,setNombre]=useState(0);
  const [id,setId]=useState("");
  const navigate= useNavigate();

  const [currentDate,setCurrentDate]=useState(new Date());

  const [currentDate2,setCurrentDate2]=useState(new Date());

  const [list,setList]=useState([]);
  const [modal,setModal]=useState(false);

     /*Recuperer la date actuelle*/
     useEffect( ()=>{
      const intervalId= setInterval(()=>{
          setCurrentDate(new Date()); },1000);
  
          return ()=>{clearInterval(intervalId);}
    },[] )

      /*Recuperer la date de sortie*/
      useEffect( ()=>{
        const intervalId= setInterval(()=>{
            setCurrentDate2(new Date()); },1000);
    
            return ()=>{clearInterval(intervalId);}
      },[] )
  
    /*Insérer les matériaux*/
      const handleSubmit= (event)=>{
        axios.post("http://localhost:3002/insert",{nom:nom,nombre:nombre,heure_ent:currentDate,id:id})
        .catch(err => console.log(err))
        navigate('/Entree');
        }
      
  
  /*Modal*/
  const toggleModal=()=>{
    setModal(!modal);
  }

  /*Recuperer la date actuelle*/
  useEffect( ()=>{
    const intervalId= setInterval(()=>{
        setCurrentDate(new Date()); },1000);

        return ()=>{clearInterval(intervalId);}
  },[] );

     /*Afficher les matériaux*/
     useEffect(()=>{
      const listMateriel=()=>{
        axios.get("http://localhost:3002/read")
        .then((response)=>{
          setList(response.data)
        })
        .catch (err => console.log(err))
       };
       listMateriel();
     },[]);
  
     /*Update*/
     const handleUpdate=()=>{
      axios.post("http://localhost:3002/insertSortie")
      axios.put("http://localhost:3002/updateHeure",{heure_sort:currentDate2})
      axios.put("http://localhost:3002/decrementer/${id}")
      .catch(err=>console.log(err))
      window.location.reload();
     }

  return (
    <>
    <div className='container-home'>
      <div  className='navbar'> <Navbar/></div>

      <div>
            <Darkmode/>

            <div className='container-inline'>

              <div className='inline-add'>
                <div className='title-material'>Liste des <span><h2 className='title-material-span' >Matériels</h2></span></div>
              </div>

              <div className='search-bar'>
               <div> <input type='text' placeholder=''/></div> 
               <div><img src={search} className='icone-search'/></div>
              </div>
            </div>

            <div className='table-container'>
              <div  className='button-div'> 
                <button to="/Ajouter" className='button-entree' onClick={toggleModal}><img src={add}/>Ajouter</button>

               {/*Modal*/}
                {modal &&(
                  <div className='modal'>
                  <div className='overlay' onClick={toggleModal}></div>
                  <div className='modal-content'>

                  <div className='form-add'>
                    <h2>Entrer de nouveaux matériels</h2>
                    <form onSubmit={handleSubmit}>
                      <label>Nom matériel</label>
                      <input type='text' onChange={(event)=>{setNom(event.target.value)}}/>
                      <label>Nombre </label>
                      <input type='number' onChange={(event)=>{setNombre(event.target.value)}}/>
                      <label>Id utilisateur</label>
                      <input type='number'  onChange={(event)=>{setId(event.target.value)}}/>

                      <div className='btn-div-modal'>
                      <button className='btn-modal' type='submit'>Ajouter</button>
                      <button className='btn-modal' onClick={toggleModal}>Fermer</button>
                      </div>
                     
                      </form>
                  </div>
                  
                  </div>
                  </div>
                )}
              </div>
            <table>
              <thead>
                <th>Nom du matériel</th>
                <th>Nombre de matériels</th>
                <th>Date d'entrée</th>
                <th>Heure d'entrée</th>
                <th>Responsable</th>
                <th>Actions</th>
              </thead>
             
              <tbody>
           {/*Afficher les élement de la table */}
              {
              list.map((val)=>(
                val.nbr_ent>=1 &&(
                  <tr>
                  <td>{val.nom_ent}</td>
                  <td>{val.nbr_ent}</td>     
                  <td>{format(new Date(val.heure_ent),'dd-MM-yyyy')}</td>
                  <td>{format(new Date(val.heure_ent),'HH:mm')}</td>
                  <td>{val.name}</td>
                  <td>
                    <button className='btn-sortir' onClick={handleUpdate}>Sortir</button>
                  </td>
              </tr>
                )
             
        ))}
              </tbody>
              </table>
            </div>
       {/*   <p>{`${hours}:${mn}`}</p>
<td>Diams</td>
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