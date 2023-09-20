import React from 'react'

function Darkmode() {
    const darkMode=()=>{
        document.querySelector("body").setAttribute("data-theme","dark");
      };
      const lightMode=()=>{
        document.querySelector("body").setAttribute("data-theme","light");
      };
    
      const toggleTheme=(e)=>{
        if (e.target.checked) {darkMode()}
        else {lightMode()};
      };
    
  return (
    <>
             <input type='checkbox' id="check" onChange={toggleTheme}/>
              <label for="check" className='button'></label>
    </>
  )
}

export default Darkmode