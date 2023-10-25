import React from 'react'
import plant from '../../pages/images/plant.svg'

function EntreeSec2() {
  return (
    <>
        <div className='container'>
        <div className='cercle'> </div>
        <div className='cercle2'> </div>

            <div className='personal-carte'>
                <h2 className='title'>Ajouter vos matériels personnels</h2>
                
                <div className='form-add'>
                <form >
                    <label>Numéro utilisateur</label>
                    <input type='number'/>
                    <label>Nom matériel</label>
                    <input type='text' />
                    <label>Département</label>
                    <input type='number' />
                   
                <div className='btn-div-modal'>
                    <button className='btn-modal' type='submit'>Ajouter</button>                          
                </div>
                </form>
                </div>
            </div>

        <img src={plant} className='plant2 plant-sec'/>
        </div>
    </>
  )
}

export default EntreeSec2