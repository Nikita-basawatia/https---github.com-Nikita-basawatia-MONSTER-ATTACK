
import Playerbar from "./Playerbar";
import Monsterbarr from "./Monsterbarr";
import Attackdetail from "./Attackdetail";

import React, { useState } from 'react';


function App() {

 const [playerHealth, setPlayerHealth] = useState(100);
const [monsterHealth, setMonsterHealth] = useState(100);
const [attackDetails, setAttackDetails] = useState([]); 
  
  const handlePlayerAttack = (randomNumber) => {
    const finalhealth = monsterHealth - randomNumber
    const attackDetailp = `Player attacked the monster with ${randomNumber} damage.`;
    setAttackDetails([...attackDetails, attackDetailp]);
    if (finalhealth <= 0) {
      
      alert("game over - player won")
      setMonsterHealth(100);
      setPlayerHealth(100)
    }
    else {
      setMonsterHealth(finalhealth);
    }   
    
    setTimeout(handleMonsterAttack, 1000);
    }

  const handleMonsterAttack = () => {
  const randomNumber = Math.floor(Math.random() * 20) + 1;

    const attackDetailm = `Monster attacked the player with ${randomNumber} damage.`;
    const finalhealth2 = playerHealth - randomNumber
         console.log("Attack Details before healing:", attackDetails);

    setAttackDetails([...attackDetails, attackDetailm]);
         console.log("Attack Details before healing:", attackDetails);

    if (finalhealth2 <= 0) {
      
      alert("game over - Monster won")
      setPlayerHealth(100)
      setMonsterHealth(100);
    }
    else {
      setPlayerHealth(playerHealth - randomNumber);
    }  
         
    }
       console.log("Attack Details before healing:", attackDetails);

  const handleHeal = (randomNumber) => {
  const attackDetail = `Player healed himself with ${randomNumber} life.`;

    setPlayerHealth(playerHealth + randomNumber);
    setAttackDetails([...attackDetails, attackDetail]);
    

  }
  return (
    <>
      
      <Playerbar playerHealth={playerHealth}
                 monsterHealth={monsterHealth}
                 onPlayerAttack={handlePlayerAttack}
                 onHeal ={handleHeal}
      />
      
      <Monsterbarr playerHealth={playerHealth} monsterHealth={monsterHealth} onMonsterAttack={handleMonsterAttack} />
      <Attackdetail attackDetails={attackDetails} />
      </>
  )
}

export default App;
