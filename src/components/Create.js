import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Acceuil from './Acceuil/Acceuil';

function Create() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);

    const displayInfo = async(event) => {
      event.preventDefault();
        await axios.post("http://localhost:3002/create",
          {
            name: name,
            age: age,
          }).then(() => {
            console.log("ok");
          }).catch(err => console.log(err))
      }
  
  return (
    <>
    {/*
       <form onSubmit={displayInfo}>
      <label>Name :</label>
      <input type='text'
        onChange={(event) => { setName(event.target.value) }}
      />

      <label>Age</label>
      <input type='number'
        onChange={(event) => { setAge(event.target.value) }}
      />
      <button>Submit</button>
   
    </form>
    */}
   

    </>
  )
}

export default Create