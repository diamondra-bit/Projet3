import React, { useEffect, useState } from 'react'
import {Bar} from 'react-chartjs-2'
import Navbar from '../components/Acceuil/Navbar'
import Darkmode from '../components/Acceuil/Darkmode'
import monitor from '../pages/images/utilisateur.svg'
import input from '../pages/images/in.svg'
import out from '../pages/images/out.svg'
import '../pages/css/Home.css'
import axios from 'axios'
import {format} from 'date-fns'
import { Chart } from 'chart.js/auto';

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

  /*Count Materiel*/
  const[nbrmat,setNbrmat]=useState();
  useEffect(()=>{
    const countMat=()=>{
      axios.get("http://localhost:3002/countMat")
      .then((response)=>{
        setNbrmat(response.data.sum)
      })
      .catch(err=>(console.log(err)))
    }
    countMat();
  },[])

  /*Count Entree*/
  const [nbrutil,setNbrutil]=useState("");
  useEffect(()=>{
    const countUtil=()=>{
      axios.get("http://localhost:3002/countMat1")
      .then((response)=>{
        setNbrutil(response.data.name)
      })
      .catch(err=>(console.log(err)))
    }
    countUtil();
  },[])

   /*Count Sortie*/
   const[nbrsortie,setNbrsortie]=useState("");
   useEffect(()=>{
    const countSortie=()=>{
      axios.get("http://localhost:3002/countMat2")
      .then((response)=>{
       setNbrsortie(response.data.countSortie)
      })
      .catch(err=>(console.log(err)))
    }
    countSortie(); 
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
                <div className='title-card1'><p>{nbrutil!==null?nbrutil:"0"}  <br/> <br/> <span>Utilisateurs</span></p></div>
                <div><img src={monitor} className='image-card image-utilisateur' /></div>
              </div>
              <div className='card card1'>
                <div className='title-card1'><p> {nbrmat!==null?nbrmat:"0"} <br/> <br/> <span>Entrées</span></p></div>
                <div><img src={input} className='image-card' /></div>
              </div>
              <div className='card card1'>
                <div className='title-card1'><p>{nbrsortie!==null?nbrsortie:"0"}  <br/> <br/> <span>Sorties</span></p></div>
                <div><img src={out} className='image-card' /></div>
              </div>
            </div>

          
            <h1 className='title-card3'>Historique</h1>
            <div className='ligne'></div> <br/> <br/> <br/> <br/>

            <div>
            <h2 className='history-title-entry'>Entrées effectuées récemment</h2>
              <div className='card2'>
              {
              list.map((val,key)=>(
                <div className='history-entree'>  
                  <div className='history-nom history1' >{val.nom_ent}</div>     
                  <div  className='history-nom history1' >{val.nbr_ent}</div>     
                  <div  className='history-nom history1'  >{format(new Date(val.heure_ent),'dd-MM-yyyy')}</div>
                  < div  className='history-nom history1' >{format(new Date(val.heure_ent),'HH:mm')}</div>
                  <div  className='history-nom history1' >{val.name}</div>   
             
                </div>
                          
        ))}
            </div>

          {/*Historique*/}
            <div className='main-card'>       
              </div>
              <h2 className='history-title-entry'>Sorties effectuées récemment</h2>
              <div className='card2'>
              {
              list2.map((val,key)=>(
                <div className='history-entree'>  
                  <div  className='history-nom history1' >{val.nom_sort}</div>     
                  <div  className='history-nom history1'>{format(new Date(val.heure_sort),'dd-MM-yyyy')}</div>
                  < div  className='history-nom history1'>{format(new Date(val.heure_sort),'HH:mm')}</div>     
                  <div  className='history-nom history1'>{val.name}</div>
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