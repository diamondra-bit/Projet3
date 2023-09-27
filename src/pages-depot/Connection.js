import React from 'react'
import { Link } from 'react-router-dom'

function Connection() {

  return (
    <>
      <div>Connection</div>

      <Link to={"/Login-employe"}>
        <button>Employé</button>
      </Link>
      <Link to={"/Login-depot"}>
        <button>Dépot</button>
      </Link>
      <Link to={"/Login-securite"}>
        <button>Sécurité</button>
      </Link>
      
    </>

  )
}

export default Connection