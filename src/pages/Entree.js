import React, { useState,useEffect,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from '../components/Acceuil/Navbar'
import NavbarHorizontal from '../components/Acceuil/NavbarHorizontal'
import DarkNotif from '../components/Acceuil/DarkNotif';

import axios from 'axios';
import {format} from 'date-fns'
import { io } from "socket.io-client";
import { useNotification } from '../components/store/NotifContext';// Importez le contexte

import '../pages/css/Entree.css'
import add from '../pages/images/add.svg'
import search2 from '../pages/images/search.svg'
import Darkmode from '../components/Acceuil/Darkmode';


function Entree({numero}) {

  const [nom,setNom]=useState("");
  const [nombre,setNombre]=useState(0);
  const [id,setId]=useState("");
  const [moyen,setMoyen]=useState("");
  const[uid,setUid]=useState("");
  const[transid,setTransid]=useState("");
  const navigate= useNavigate();
  const [currentDate,setCurrentDate]=useState(new Date());
  const [currentDate2,setCurrentDate2]=useState(new Date());
  const [modal,setModal]=useState(false);
  const [modal2,setModal2]=useState(false);

  /*Recuperer la date d'entrée*/
          useEffect( ()=>{
            const intervalId= setInterval(()=>{
              setCurrentDate(new Date());
             } ,1000);
          
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
            axios.post("http://192.168.100.48:3003/insert"
            ,{nom:nom,nombre:nombre,heure_ent:currentDate,id:id})
            .catch(err => console.log(err))
        
          navigate('/Entree');
        }


      /*Modal*/
          const toggleModal=()=>{
            setModal(!modal);
          }
          const toggleModal2=()=>{
            setModal2(!modal);
          }

     /*Afficher les matériaux*/
        const [list,setList]=useState([]);
          useEffect(()=>{
            const listMateriel=()=>{
              axios.get("http://192.168.100.48:3003/read")
              .then((response)=>{
                console.log(response.data);
                setList(response.data)
              })
              .catch (err => console.log(err))
            };
            listMateriel();
          },[]);    
   
      /*Trigger*/

      const darkModeRef = useRef(null);

      const triggerNotificationInDarkmode = () => {
        if (darkModeRef.current) {
          darkModeRef.current.triggerNotification();
        }
      }
      
     /*Transférer données vers Sortie*/
          const handleUpdate=(idsel)=>{
            toggleModal2();
            triggerNotificationInDarkmode ();
            axios.post(`http://192.168.100.48:3003/insertSortie/${idsel}`)
            axios.put(`http://192.168.100.48:3003/updateHeure/${idsel}`,{heure_sort:currentDate2})
            axios.put(`http://192.168.100.48:3003/updateResponsable/${idsel}`,{uid:uid})
            axios.put(`http://192.168.100.48:3003/updateSec/${idsel}`)
            axios.put(`http://192.168.100.48:3003/updateSec2/${idsel}`)
            axios.put(`http://192.168.100.48:3003/updateEtat/${idsel}`)
            axios.put(`http://192.168.100.48:3003/deleteSortie/${idsel}`)
            .catch(err=>console.log(err))

            
          }

      /*Search*/
          const [texte, setTexte] = useState("");
          const [searchlist, setSearchlist] = useState([]);  
          const handleSearch = () => {
              axios.get(`http://192.168.100.48:3003/searchEntree?texte=${encodeURIComponent(texte)}`)
              .then((response) => {
                setSearchlist(response.data); 
              })
              .catch(err => console.log(err))
              .finally(() => {
                // Vous pouvez mettre ici d'autres actions à effectuer après la recherche.
              });
              toggleSearch();
          };
  
      /*ToggleSearch*/
            const[search,setSearch]=useState(true);
            const toggleSearch=()=>{ 
              setSearch(!search);
              console.log(search);
           /*   window.location.reload();*/
          }

       
  return (
    <>

    <div className='container-home ' >
      <div  className='navbar'> <Navbar/></div>

      <div>
        <div className='darknotif-top'>
       
        <div className='navbar-flex'>
         <Darkmode  ref={darkModeRef}/>     
          </div> 
        </div>
 

            {/*Section 1*/}
            <div className='container-inline'>
                <div className='inline-add'>
                  <div className='title-material'>Liste des <span><h2 className='title-material-span' >Matériels</h2></span></div>
                </div>
              {/*Barre de recherche*/}
                <div className='search-bar'>
                  <div> <input type='text' onChange={(event)=>{setTexte(event.target.value)}} /></div> 
                  <div  onClick={handleSearch}> <img src={search2} className='icone-search'/> </div>
                </div>
            </div>          

          {/*Table */}
          <div className='table-container'>
              <div  className='button-div'> 
                  <button to="/Ajouter" className='button-entree' onClick={toggleModal}><img src={add}/>Ajouter</button>

                  {/*Modal d'ajout*/}
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
                                        <label>Numéro utilisateur</label>
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

            {/* Sans Searchbar par défaut */}
              {search&&(
                  <table >
                    <thead>
                      <tr>
                      <th>Id du matériel</th>
                      <th>Nom du matériel</th>
                      <th>Date d'entrée</th>
                      <th>Heure d'entrée</th>
                      <th>Responsable</th>
                      <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((val)=>(
                        
                          <tr onClick={handleRowClick}>
                             <td>{val.id_ent}</td>
                            <td>{val.nom_ent}</td>  
                            <td>{format(new Date(val.heure_ent),'dd-MM-yyyy')}</td>
                            <td>{format(new Date(val.heure_ent),'HH:mm')}</td>
                            <td className='td-responsable'>{val.firstname}   {val.lastname}</td>
    {/*Eto lay tsy mety  triggerNotificationInDarkmode();
    */  }<td> <button className='btn-sortir' onClick=
                           {toggleModal2} >Sortir</button> 
                            </td>

                            {/*Modal Sortie*/}
                            {modal2 &&(
                                <div className='modal'>
                                  <div className='overlay' onClick={toggleModal2}></div>
                                     <div className='modal-content modal-content2'>
                                        <div className='form-add'>
                                            <h2>Informations sur la sortie</h2>
                                            <form onSubmit={handleSubmit}>
                                              <label>Numéro du responsable de sortie</label>
                                              <input type='text' onChange={(event)=>{setUid(event.target.value)}}/>
                                              <div className='btn-div-modal'>
                                              <button className='btn-modal' type='submit' onClick={() => { handleUpdate(val.id_ent); }}>Ajouter</button>
                                              <button className='btn-modal' onClick={toggleModal2}>Fermer</button>
                                              </div>
                                           </form>
                                        </div> 
                                    </div>
                                  </div>
                              )}
                        </tr>   
                      ))}
                    </tbody>
                  </table>
               )}

            {/*  Searchbar */}
              {!search &&(
                  <table>
                      <thead>
                        <th>Nom du matériel</th>
                        <th>Date d'entrée</th>
                        <th>Heure d'entrée</th>
                        <th>Responsable</th>
                        <th>Actions</th>
                      </thead>
                      <tbody>
                          {searchlist.map((val)=>(
                            
                              <tr >
                              <td>{val.nom_ent}</td>
                              <td>{format(new Date(val.heure_ent),'dd-MM-yyyy')}</td>
                              <td>{format(new Date(val.heure_ent),'HH:mm')}</td>
                              <td >{val.firstname}</td>
                              <td>
                                <button className='btn-sortir' onClick={toggleModal2} >Sortir</button>  
                              </td>
            
                              {/*Modal Sortie*/}
                              {modal2 &&(
                                <div className='modal'>
                                  <div className='overlay' onClick={toggleModal2}></div>
                                    <div className='modal-content modal-content2'>
                                      <div className='form-add'>
                                        <h2>Informations sur la sortie</h2>
                                        <form onSubmit={handleSubmit}>
                                          <label>Numéro du responsable de sortie</label>
                                          <input type='text' onChange={(event)=>{setUid(event.target.value)}}/>
                                          <div className='btn-div-modal'>
                                          <button className='btn-modal' type='submit' onClick={() => {
                                            handleUpdate(val.id_ent);  }}>Ajouter</button>
                                          <button className='btn-modal' onClick={toggleModal2}>Fermer</button>
                                          </div>                           
                                      </form>
                                    </div>           
                                </div>
                              </div>
                              )}
                            </tr>     
                         ))}
                      </tbody>
                  </table>
                  )}
            </div>
    
      </div>
    </div>
    </>
  )
}

export default Entree