import React, { useEffect, useState } from 'react'
import Navbar from '../components/Acceuil/Navbar'
import Darkmode from '../components/Acceuil/Darkmode'
import {format} from 'date-fns'
import axios from 'axios';
import search from '../pages/images/search.svg'

function Sortie() {
  const [list,setList]=useState([]);

  /*Afficher les sorties*/
  useEffect(()=>{
    const listMateriel=()=>{
      axios.get("http://localhost:3002/readSortie")
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
        <div className='navbar'><Navbar/></div>

        <div><Darkmode/>
        <div className='container-inline'>

            <div className='inline-add'>
              <div className='title-material'>Liste des Matériels <span><h2 className='title-material-span' >sorties</h2></span></div>
            </div>

            <div className='search-bar'>
            <div> <input type='text' placeholder=''/></div> 
            <div><img src={search} className='icone-search'/></div>
            </div>
          </div>

          <div className='table-container'>
          <table>
            <thead>
              <th>Nom du matériel</th>
              <th>Date de sortie</th>
              <th>Heure de sortie</th>
              <th> Numero du Responsable</th>
              <th> Nom du Responsable</th>
              <th>Moyens de transport</th>
              <th> Numero du transporteur</th>
              <th>Chauffeur ou autre</th>
              <th>Actions</th>

            </thead>
            <tbody>
              {
               list.map((val)=>(
                <tr>
                  <td>{val.nom_sort}</td>
                  <td>{format(new Date(val.heure_sort),'dd-MM-yyyy')}</td>
                  <td>{format(new Date(val.heure_sort),'HH:mm')}</td>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.moyen_transport}</td>
                  <td>{val.responsable_de_sortie}</td>
                  <td></td>
                  <button className='btn-sortir btn-print' >Imprimer</button>

                </tr>
               ))
              }
            </tbody>
          </table>
        </div>
        </div>
    </div>

    </>
  )
}

export default Sortie