import React from 'react'

function SortieSec2() {
  return (
    <>
      <div className='container'>
      <h2 className='title title-sortie-sec'>Liste de vos matériels personnels</h2>
      <div className='ligne-sortie'></div>
      <div className='sortieSec'>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Heure</th>
              <th>Matricule</th>
              <th>Matériels</th>
              <th>Département</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>25-10-2023</td>
              <td>16:30</td>
              <td>1661</td>
              <td>PC+Chargeur</td>
              <td>Mellis</td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </>
  )
}

export default SortieSec2