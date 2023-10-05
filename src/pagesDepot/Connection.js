import React from 'react'
import { Link } from 'react-router-dom'
import '../pagesDepot/cssDepot/connection.css'


function Connection() {

  const styleSansBordure = {
    textDecoration: 'none', // Pour supprimer la bordure de l'élément Link
  };

  return (
    <>
      <div className="bodyConnection">
        <div className="containerConnection">
            <div className="box">
              <div className="contentConnection">
                  <h2 className="numero">01</h2>
                  <h3 className="titre">Employé</h3>
                  <p className="paragrapheConnection">Petite description...</p>
                  <Link to={"/LoginEmploye"} className="btnConnection" style={styleSansBordure}>Entrer</Link>
              </div>
            </div>  

            <div className="box">
              <div className="contentConnection">
                  <h2 className="numero">02</h2>
                  <h3 className="titre">Dépôt</h3>
                  <p class="paragrapheConnection">Petite description...</p>
                  <Link to={"/LoginDepot"}  className="btnConnection">Entrer</Link>
              </div>
            </div> 
        
            <div className="box">
              <div className="contentConnection">
                  <h2 className="numero">03</h2>
                  <h3 className="titre">Sécurité</h3>
                  <p className="paragrapheConnection">Petite description...</p>
                  <Link to={"/LoginSecurite"}  className="btnConnection">Entrer</Link>
              </div>
            </div>
        </div>
      </div>
    </>

  )
}
export default Connection