import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


function Client() {
    const [list,setList]=useState([])
 
    const getEmployee = () =>
    {
       axios.get("http://localhost:3002/read",
       ).then((response) => {
          setList(response.data)
        }).catch(err => console.log(err))
    }
    
  
  return (
    <>
    <Link to="/Create">Add</Link>
    <button onClick={getEmployee}>Afficher</button>

<table>
    <thead>
        <th>Name</th>
        <th>Age</th>
        <th>Actions</th>
    </thead>

    <tbody>
        {
        list.map((val,key)=>(
        <tr>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>
              <Link to={`update/${data.id}`}>Modifier</Link>
              <button>Supprimer</button>
            </td>
        </tr>
        ))}
        </tbody>
</table>
  
    </>
  )
}

export default Client