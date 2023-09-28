import React from 'react'
import { Link } from 'react-router-dom'

function Connection() {

  return (
    <>
      <div>Connection</div>

      <Link to={"/LoginEmploye"}>
        <button>Employé</button>
      </Link>
      <Link to={"/LoginDepot"}>
        <button>Dépot</button>
      </Link>
      <Link to={"/LoginSecurite"}>
        <button>Sécurité</button>
      </Link>
      
    </>

  )
}

export default Connection