import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {format} from 'date-fns'

function SecuriteAffichage() {
    const [list,setList]=useState([]);

    useEffect((idSel)=>{
        const listMateriel=()=>{
          axios.get(`http://localhost:3003/readSortie1/${idSel}`)
          .then((response)=>{
            setList(response.data)
          })
          .catch (err => console.log(err))
        };
        listMateriel();
      },[]);

    
  return (
    <>
        <div className='modal'>
                          <div className='overlay overlay-security'></div>
                              <div className='modal-content modal-content-security'>
                                  <div className='form-add'>
                                  <div className='form-add'>
                                    
                                        {list.map((val) => (
                                        <ul key={val.id}>
                                            <div>Nom du matériel</div>
                                            <li className='td-id td-nom'>{val.nom_sort}</li> <br/>
                                            <div>Date de sortie</div>
                                            <li className='td-heure'>{format(new Date(val.heure_sort_sec), 'dd-MM-yyyy')}</li>  <br/>
                                            <div>Heure de sortie</div>
                                            <li className='td-sortie'>{format(new Date(val.heure_sort_sec), 'HH:mm')}</li> <br/>
                                            <div>Responsable de sortie</div>
                                            <li>{val.firstname}</li> <br/>
                                            <div>Responsable de transport</div>
                                            <li>{val.responsable_nom}</li> <br/>
                                            <div>Moyen de transport</div>
                                            <li>{val.moyen_transport}</li> <br/>
                                        </ul>
                                        ))}
                                   
                                    </div>

                              </div>           
                          </div>
                      </div>     
    </>
  )
}


export default SecuriteAffichage