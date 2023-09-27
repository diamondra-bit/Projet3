import React from 'react'
import { Link } from 'react-router-dom'

function Connection() {

  return (
    <>
      <div>Connection</div>
      <Link to={"/Login"}>
        <button>Employé</button>
      </Link>
      <button>Dépot</button>
      <button>Sécurité</button>
    </>

  )
}

export default Connection