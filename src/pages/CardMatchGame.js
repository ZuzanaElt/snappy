import React, { useState } from 'react';
import LevelSelect from './LevelSelect';
import Card from '../components/card';
//import { NavLink } from 'react-router-dom';

const CardMatchGame = (level) => {
  
  const [level, setLevel] = useState(0);

  //testing array - we need to create images array
  const imageArray = [1,2,3,4,5,6,7,8,9,0];

  randomisedImageArray(imageArray, num) =() => {
    const mixedImages = ([...imageArray].sort(() => 0.5 - Math.random()));
    return mixedImages.slice(0);
  }
 

    if(!level) {
      return (
        <div className='container'>
          <h1>Card Match Game</h1>
          <LevelSelect level={level} setLevel={setLevel} />
        </div>
      )
    }

    if(level === 1){
    return(
      <>
        <div>
            {randomisedImageArray(imageArray, 2).map(() => (
              <Card/>)
            )}     
        </div>
      </>
    )
  }
  if(level === 2){
    return(
      <>
        <div>
        {randomisedImageArray(imageArray, 4).map(() => (
              <Card/>)
            )}     
        </div>
      </>
    )
  }
  if(level === 3){
    return(
      <>
        <div>
        {randomisedImageArray(imageArray, 8).map(() => (
              <Card/>)
            )}     
        </div>
      </>
    )
  }

};

export default CardMatchGame;