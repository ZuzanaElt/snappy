import React, { useEffect, useState } from "react";
import LevelSelect from "../components/levelSelect/LevelSelect";
import Card from "../components/card";
import WellDone from "../components/well-done/WellDone"
import { supabase } from "../lib/supabaseClient"
//import { NavLink } from 'react-router-dom';
import "../scss/pages/game.scss"

const CardMatchGame = () => {

  const [level, setLevel] = useState(0);

  const [images, setImages] = useState([]);

  async function getImages() {
      let { data, error } = await supabase.storage.from("game-images").list();
      if (error) {
        console.log(error);
      } else {
        setImages(data);
      }
    }

    useEffect(() => {
      getImages();
    }, []);
    useEffect(() => {
      console.log(images);
    }, [images]);


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
        <h1>Card Matching Game</h1>
        <LevelSelect level={level} setLevel={setLevel} />
      </div>
    );
  }
  if (level === 1) {
    const randomCard = randomisedImageArray(imageArray, 2);
    return (
      <>
        <div className="container">
          <h1>Easy</h1>
          {randomCard.map((card, index) => (
            <div className="cardDiv1">
              <Card card={card} index={index} />
            </div>
          ))}
        <button className="finish" onClick={() => {
            setLevel(4);
          }}>Finish</button>
        </div>
      </>
    );
  }
  if (level === 2) {
    const randomCard = randomisedImageArray(imageArray, 4);
    return (
      <>
        <div className="container">
          <h1>Easy</h1>
          {randomCard.map((card, index) => (
            <div className="cardDiv2">
              <Card card={card} index={index} />
            </div>
          ))}
        <button className="finish" onClick={() => {
            setLevel(4);
          }}>Finish</button>
        </div>
      </>
    );
  }
  if (level === 3) {
    const randomCard = randomisedImageArray(imageArray, 8);
    return (
      <>
        <div className="container">
          <h1>Easy</h1>
          {randomCard.map((card, index) => (
            <div className="cardDiv3">
              <Card card={card} index={index} />
            </div>
          ))}
        <button className="finish" onClick={() => {
            setLevel(4);
          }}>Finish</button>
        </div>
      </>
    );
  }

  if (level === 4) {
    return (
      <>
        <div>
          <WellDone level={level} setLevel={setLevel} />
        </div>
      </>
    );
  }

};


export default CardMatchGame;
