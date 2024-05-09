import React, { useState } from 'react';

function Monsterbarr({ playerHealth, monsterHealth, onMonsterAttack }) {

  const handleButtonClick = () => {
    const randomNumberm = Math.floor(Math.random() * 20) + 1;
    if (playerHealth > 0) {
      { onMonsterAttack(randomNumberm) };
    }
  }

  const getColor = () => {
    if (monsterHealth < 30) {
      return "#ff0000";
    }
    else if (monsterHealth < 70) {
      return "#ffa500"
    }
  }
  return (
    <>
      <h1>monster</h1>
      <div className='app'> </div>
      <div className="progress-bar" >

        <div className="progress-bar-fill"
        style={{width: `${monsterHealth}%` , backgroundColor: getColor()}}
        ></div>
      </div>
      <div className="progress-label"> { monsterHealth}%</div>
      <button onClick={handleButtonClick}> Attack</button>
     </>
    );
  
}

export default Monsterbarr