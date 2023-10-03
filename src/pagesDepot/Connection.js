import React from 'react'
import { Link } from 'react-router-dom'
import '../pagesDepot/cssDepot/connection.css'


function Connection() {

  return (
    
    <>
    <div className='body'>
      

            <div className="box">
              <div className="content">
                  <h2>01</h2>
                  <h3>Employé</h3>
                  <p>Petite description...</p>

                  <Link to={"/LoginEmploye"}>
                    <button>Employé</button>
                  </Link>
              </div>
            </div>  

            <div className="box">
              <div className="content">
                  <h2>02</h2>
                  <h3>Dépôt</h3>
                  <p>Petite description...</p>
                  <Link to={"/LoginDepot"}>
                    <button>Dépot</button>
                  </Link>
              </div>
            </div>  

            <div className="box">
              <div className="content">
                  <h2>03</h2>
                  <h3>Sécurité</h3>
                  <p>Petite description...</p>
                  <Link to={"/LoginSecurite"}>
                    <button>Sécurité</button>
                  </Link>
              </div>
            </div>
            
        </div>
      
    </>

  )
}

export default Connection