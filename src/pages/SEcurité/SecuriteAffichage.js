import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {format} from 'date-fns'
import '../SEcurité/Securite.css'
import Navbartop from '../../components/Acceuil/Navbartop';

function SecuriteAffichage() {
    const [list,setList]=useState([]);

    useEffect(()=>{
        const listMateriel=()=>{
          axios.get(`http://192.168.100.48:3003/readSortie1`)
          .then((response)=>{
            setList(response.data)
          })
          .catch (err => console.log(err))
        };
        listMateriel();
      },[]);

    
  return (
    <>
    <div className='container-home'>

            <Navbartop/>
        <div className='div-table-container2'>
              <table className='table-container2'>
                      <thead className='thead '>
                        <th >Numéro </th>
                        <th>Nom </th>
                        <th>Date d'entrée</th>        
                        <th>Heure d'entrée</th>           
                        <th>Date de sortie</th>
                        <th>Heure de sortie</th>
                        <th>Responsable  1</th>
                        <th>Responsable  2</th>
                        <th>Moyens de transport</th>
                        <th>Immatriculation</th>
                        <th>Date de sortie 2</th>
                        <th>Heure de sortie 2</th>
                        <th>Heure de sortie 3</th>
                        <th>Securité1</th>
                        <th>Securité2</th>
                        <th>Etat</th>
                      </thead>
                      <tbody>
                        
                                {
                                  list.map((val)=>(
                                    <tr>
                                      <td>{val.id_sortie}</td>
                                      <td>{val.nom_ent}</td>
                                      <td>{format(new Date(val.heure_ent),'dd-MM-yyyy')}</td>
                                      <td>{format(new Date(val.heure_ent),'HH:mm')}</td>
                                      <td>{format(new Date(val.heure_sort),'dd-MM-yyyy')}</td>
                                      <td>{format(new Date(val.heure_sort),'HH:mm')}</td>     
                                      <td>{val.firstname}{val.lastname}</td>
                                      <td>{val.responsable_nom}</td>
                                      <td>{val.moyen_transport}</td>
                                      <td>{val.voiture_id }</td>
                                      <td>{format(new Date(val.heure_sort_sec),'dd-MM-yyyy')}</td>
                                      <td>{format(new Date(val.heure_sort_sec),'HH:mm')}</td>    
                                      <td>12:55</td>    
                                      <td>{val.securite1}</td>
                                      <td>{val.securite2}</td>
                                      <td>{val.etat_sortie}</td>
                                    </tr>
                                  ))
                                }
                             
                      </tbody>
                  </table>
          </div>  
        
    </div>
    </>
  )
}


export default SecuriteAffichage