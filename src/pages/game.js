import React, { useEffect, useState } from "react";
import LevelSelect from "../components/levelSelect/LevelSelect";
import Card from "../components/card";
//import { NavLink } from 'react-router-dom';

const CardMatchGame = () => {
  const [level, setLevel] = useState(0);

  //testing array - we need to create images array
  const imageArray = [
    "pic1",
    "pic2",
    "pic3",
    "pic4",
    "pic5",
    "pic6",
    "pic7",
    "pic8",
  ];

  function randomisedImageArray(imageArray, num) {
    const resultArray = [];
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * imageArray.length);
      const randomItem = imageArray[randomIndex];
      resultArray.push(randomItem);
      resultArray.push(randomItem);
    }
    return resultArray;
  }
  if (level === 0) {
    return (
      <div className="container">
        <h1>Card Match Game</h1>
        <LevelSelect level={level} setLevel={setLevel} />
      </div>
    );
  }
  if (level === 1) {
    const randomCard = randomisedImageArray(imageArray, 2);
    return (
      <>
        <div>
          <h1>Easy</h1>
          {randomCard.map((card, index) => (
            <div>
              <Card card={card} index={index} />
            </div>
          ))}
        </div>
      </>
    );
  }
  if (level === 2) {
    return (
      <>
        <div>
          {/* {randomisedImageArray(imageArray, 4).map(() => (
            <Card />
          ))} */}
        </div>
      </>
    );
  }
  if (level === 3) {
    return (
      <>
        <div>
          {/* {randomisedImageArray(imageArray, 8).map(() => (
            <Card />
          ))} */}
        </div>
      </>
    );
  }
};

export default CardMatchGame;
