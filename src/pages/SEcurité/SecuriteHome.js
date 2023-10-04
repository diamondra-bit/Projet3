import React from 'react'

function SecuriteHome() {
  return (
    <>
        <div className='modal'>
                          <div className='overlay'></div>
                              <div className='modal-content modal-content-security'>
                                  <div className='form-add'>
                                    <h2>Entrer de nouveaux matériels</h2>
                                    <form >
                                        <label>Nom matériel</label>
                                        <input type='text'/>
                                        <label>Nombre </label>
                                        <input type='number' />
                                        <label>Numéro utilisateur</label>
                                        <input type='number'  />
                                        <div className='btn-div-modal'>
                                          <button className='btn-modal' type='submit'>Ajouter</button>
                                          <button className='btn-modal' >Fermer</button>
                                      </div>
                                    </form>
                              </div>           
                          </div>
                      </div>     
    </>
  )
}

export default SecuriteHome