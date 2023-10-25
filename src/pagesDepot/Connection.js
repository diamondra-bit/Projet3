import React from 'react'
import { Link } from 'react-router-dom'
import '../PageDepot/CssDepot/Connection.css'


function Connection() {

  return (
    <div className="bodyConnection">
      <div className="containerConnection">
        <div className='headerConnection'>
          <h1 className="titre">Connectez-vous à</h1>
          <Link to={"/LoginAdmin"} className="btnConnectionAdmin">Admin</Link>
        </div>
        <div className="connection">
            <div className="box">
              <div className="contentConnection">
                  <h2 className="numero">01</h2>
                  <h3 className="titre">Employé</h3>
                  <p className="paragrapheConnection">Petite description...</p>
                  <Link to={"/LoginEmploye"} className="btnConnection">Entrer</Link>
              </div>
            </div>  

            <div className="box">
              <div className="contentConnection">
                  <h2 className="numero">02</h2>
                  <h3 className="titre">Dépôt</h3>
                  <p className="paragrapheConnection">Petite description...</p>
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
    </div>

  )
}
export default Connection