import React from 'react'
import { Link } from 'react-router-dom'
import '../pagesDepot/cssDepot/connection.css'


function Connection() {

  return (
    <>
      <div className='bodyConnection'>
        <div class="containerConnection">
          <div class="box">
            <div class="contentConnection">
                <h2 class="numero">01</h2>
                <h3 class="titre">Employé</h3>
                <p class="paragrapheConnection">Petite description...</p>
                <Link to={"/LoginEmploye"} class="btnConnection">
                  <button >Entrer</button>
                </Link>
            </div>
          </div>  
        

          <div class="containerConnection">
            <div class="box">
              <div class="contentConnection">
                  <h2 class="numero">02</h2>
                  <h3 class="titre">Dépôt</h3>
                  <p class="paragrapheConnection">Petite description...</p>
                  <Link to={"/LoginDepot"}  class="btnConnection">
                    <button>Entrer</button>
                  </Link>
              </div>
            </div>
          </div>   
        
          <div class="containerConnection">
            <div class="box">
              <div class="contentConnection">
                  <h2 class="numero">03</h2>
                  <h3 class="titre">Sécurité</h3>
                  <p class="paragrapheConnection">Petite description...</p>
                  <Link to={"/LoginSecurite"}  class="btnConnection">
                    <button>Entrer</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
export default Connection