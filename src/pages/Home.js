import React, { useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2'
import Navbar from '../components/Acceuil/Navbar'
import Darkmode from '../components/Acceuil/Darkmode'
import monitor from '../pages/images/monitor.svg'
import input from '../pages/images/in.svg'
import out from '../pages/images/out.svg'
import '../pages/css/Home.css'
import axios from 'axios'
import {format} from 'date-fns'

function Home() {
  const [list,setList]=useState([]);
  const [list2,setList2]=useState([]);


  /*Afficher l'historique des entrées de matériaux*/
  useEffect(()=>{
    const listEntree=()=>{
      axios.get("http://localhost:3002/readHistoryEntree")
      .then((response)=>{
        setList(response.data)
      })
      .catch(err=>(console.log(err)))
    };
    listEntree();
  },[])

  /*Afficher l'historique des entrées de matériaux*/
  useEffect(()=>{
    const listSortie=()=>{
      axios.get("http://localhost:3002/readHistorySortie")
      .then((response)=>{
        setList2(response.data)
      })
      .catch(err=>(console.log(err)))
    };
    listSortie();
  },[])

  return (
    <>
    <div className='container-home'>
      <div className='navbar'>
      <Navbar/>
      </div>

      <div>
            <Darkmode/>

            <div className='main-card'>
              <div className='card card1'>
                <div className='title-card1'><p>100 <br/> <br/> <span>Matériels</span></p></div>
                <div><img src={monitor} className='image-card' /></div>
              </div>
              <div className='card card1'>
                <div className='title-card1'><p>50  <br/> <br/> <span>Entrées</span></p></div>
                <div><img src={input} className='image-card' /></div>
              </div>
              <div className='card card1'>
                <div className='title-card1'><p>50  <br/> <br/> <span>Sorties</span></p></div>
                <div><img src={out} className='image-card' /></div>
              </div>
            </div>

          
          {/*Chart*/}
            <div>
              <div className='card2'>
                {/*<Bar
               data={{
                labels:['Red','Yellow','Rouge']
               }}
               height={400}
               width={600}
              />*/}
              </div>
            </div>

          {/*Historique*/}
            <h1 className='title-card3'>Historique</h1>
            <div className='main-card'>
              <div className='card3'>
                <h2 className='history-title-entry'>Entrées effectuées récemment</h2>
              {
              list.map((val,key)=>(
                <div className='history-entree'>  
                  <div className='history-nom'>{val.nom_ent}</div>     
                  <div className='history-date'>{format(new Date(val.heure_ent),'dd-MM-yyyy')}</div>
                  < div className='history-nom'>{format(new Date(val.heure_ent),'HH:mm')}</div>
                </div>
                          
        ))}
                  
              </div>
              <div className='card3'>
              <h2 className='history-title-entry'>Sorties effectuées récemment</h2>
              {
              list2.map((val,key)=>(
                <div className='history-entree'>  
                  <div className='history-nom'>{val.nom_sort}</div>     
                  <div className='history-date'>{format(new Date(val.heure_sort),'dd-MM-yyyy')}</div>
                  < div className='history-nom'>{format(new Date(val.heure_sort),'HH:mm')}</div>
                </div>
                          
        ))}
              </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default Home