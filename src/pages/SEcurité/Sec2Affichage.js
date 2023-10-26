import React from 'react'
import plant from '../../pages/images/plant.svg'

function Sec2Affichage() {
  return (
    <>
      <div className='container'>
        <div className='cercle'> </div>
        <div className='cercle2'> </div>

            <div className='personal-carte carte-sortie'>
                <h2 className='title'>Confirmez la sortie des matériels </h2>
                
                <div className='form-add'>
                  <form>
                      <label>Numéro du matériel</label>
                         <input type='number' className='input-sec'/>
                      <label>Numéro du responsable du transport</label>
                          <input type='number' className='input-sec' />
                      <label>Nom du responsable du transport</label>
                          <input type='text' className='input-sec'/>
                      <label>Moyens de transport</label>
                          <input type='text'  className='input-sec'/>    
                      <label>Immatriculation</label>
                          <input type='text'  className='input-sec'/>
                      <div className='btn-div-modal'>
                          <button className='btn-modal' type='submit'  >Ajouter</button>
                      </div>
                  </form>
                </div>
            </div>

        <img src={plant} className='plant2 plant-sec plant-sec2'/>
        </div>
    </>
  )
}

export default Sec2Affichage