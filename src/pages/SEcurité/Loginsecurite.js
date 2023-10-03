import React from 'react'
import main2 from '../../pages/images/main2.svg'
import img1 from '../../pages/images/img1.svg'
import img2 from '../../pages/images/img2.svg'
import { Link } from 'react-router-dom'

function Loginsecurite() {
  return (
    <>
       <div className='container'>
            <div className='form-container'>

                <div className='form-text'>
                   <h1>WizFlow</h1>
                     <div className='text'>
                      Simplifiez la gestion des entrées et sorties de vos matériels en toute efficacité avec notre application
                      GED 
                    </div> 

                     <img src={main2} className='main'/>
                </div>

                <div className='form-log'>                   
                    <form >
                        <h1 className='title'> Se Connecter</h1>
                            <div className='input-field'>
                                <div>  <img src={img1} className='img'/></div>
                                <div> 
                                <input type='text'  placeholder='Entrer votre numéro'
                                />
                                </div>
                            </div>

                            <div className='input-field'>
                                <div>  <img src={img2} className='img'/></div>
                                <div> <input type='text' placeholder='Entrer votre mot de passe'
                              /></div>
                            </div>
                            <button type='submit' className='btn'>Se Connecter</button>

                                
                            </form>
                    <Link to="/ChangePassword" className='link'>Changer votre mot de passe</Link>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Loginsecurite