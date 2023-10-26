import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {format} from 'date-fns'

function SortieSec2() {
  const[list,setList]=useState([]);

  useEffect(()=>{
  const listMateriel=()=>{
    axios.get("http://192.168.100.48:3003/sortiePers")
    .then ((response)=>{
      setList(response.data);
    })
    .catch (err => console.log(err))
  }
  listMateriel();
  },[])

  return (
    <>
      <div className='container'>
      <h2 className='title title-sortie-sec'>Liste de vos matériels personnels</h2>
      <div className='ligne-sortie'></div>
      <div className='sortieSec'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Heure</th>
              <th>Matricule</th>
              <th>Nom Responsable</th>
              <th>Matériels</th>
              <th>Département</th>
            </tr>
          </thead>
          <tbody>
            {
              list.map((val)=>(
                <tr>
              <td>{format(new Date(val.date_ent),'dd-MM-yyyy')}</td>
              <td>{format(new Date(val.date_ent),'HH:mm')}</td>
              <td>{val.id}</td>
              <td>{val.nom_responsable}</td>
              <td>{val.nom_mat}</td>
              <td>{val.departement}</td>
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

export default SortieSec2