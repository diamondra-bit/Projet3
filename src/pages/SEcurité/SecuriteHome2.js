import React from 'react'
import img1 from '../images/sec2.svg'
import img2 from '../images/sec22.svg'
import img3 from '../images/sec23.svg'
import { Link } from 'react-router-dom';

function SecuriteHome2() {
  return (
    <>

        <div className='container '>
            <div className='choice'>
                <div className='carte1'>
                    <img src={img1} className='choice-image'/>
                    <div className='choice-text'>
                         <div>  Veuillez enregistrer vos matériels personnels avant d'entrer</div>
                        <Link className='choice-btn' to="/EntreeSec2" >Entrer</Link> 
                    </div>
                </div>

                <div className='carte1'>
                    <img src={img2} className='choice-image2'/>
                    <div className='choice-text'>
                         <div>  Veuillez confirmez la sortie de vos matériels personnels</div>
                        <Link className='choice-btn' to="/SortieSec2" >Entrer</Link> 
                    </div>
                </div>
                <div className='carte1'>
                <img src={img3} className='choice-image3'/>
                    <div className='choice-text'>
                         <div>  Veuillez confirmez la sortie des matériels de bureau</div>
                        <Link className='choice-btn' to="/Sec2Affichage" >Entrer</Link> 
                    </div>
                </div>
            </div>
        </div>
    </>


  )
}

export default SecuriteHome2