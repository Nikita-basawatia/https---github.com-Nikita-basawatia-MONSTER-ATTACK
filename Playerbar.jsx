import React, { useState } from 'react';

function Playerbar({playerHealth, onPlayerAttack, monsterHealth , onHeal}) {
  
 
  const handleButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    if (monsterHealth > 0) {
      onPlayerAttack(randomNumber)
    }
  }


   const handleSpecialClick = () => {
    const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    if (playerHealth > 90) {
       onPlayerAttack(randomNumber)
    }
   }
    const handleHeal = () => {
        if (playerHealth <= 90) {
            onHeal(10)
        }
        else {
            onHeal(100 - playerHealth)
        }
   
    
  } 

  const getColor = () => {
    if (playerHealth < 30) {
      return "#ff0000";
    }
    else if (playerHealth < 70) {
      return "#ffa500"
    }
  }
  return (
      <>
          <h1>player</h1>
      <div className='app'> </div>
      <div className="progress-bar" >

        <div className="progress-bar-fill"
        style={{width: `${playerHealth}%` , backgroundColor: getColor()}}
        ></div>
      </div>
      <div className="progess-label"> { playerHealth}%</div>
      <button onClick={handleButtonClick}> Attack</button>
      <button onClick={handleSpecialClick}>Special attack</button>
      {<button  onClick={handleHeal}>heal</button> }

      </>
  );
    
}

export default Playerbar