import React, { useState } from 'react';
import LevelSelect from './LevelSelect';
// import Card from '../components/Card';

const CardMatchGame = () => {

  const [level, setLevel] = useState(0);

    if(!level) {
      return (
        <div className='container'>
          <h1>Card Match Game</h1>
          <LevelSelect level={level} setLevel={setLevel} />
        </div>
      )
    }

    if(level === 1)

};

export default CardMatchGame;