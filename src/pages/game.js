import React, { useEffect, useState } from "react";
import LevelSelect from "../components/levelSelect/LevelSelect";
import Card from "../components/card";
import WellDone from "../components/well-done/WellDone";
import { supabase } from "../lib/supabaseClient";
//import { NavLink } from 'react-router-dom';
import "../scss/pages/game.scss";

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
    "pic3",
    "pic4",
    "pic5",
    "pic6",
    "pic7",
    "pic8",
    "pic13",
    "pic14",
    "pic15",
    "pic16",
    "pic17",
  ];

  function randomisedImageArray(imageArray, num) {
    let resultArray = [];
    const mixedImages = [...imageArray]
      .sort(() => 0.5 - Math.random())
      .slice(0, num);
    const doubledArray = mixedImages.concat(mixedImages);
    resultArray = doubledArray.sort(() => 0.5 - Math.random());
    return resultArray;
  }
  useEffect(() => {
    console.log(images);
  }, [images]);

  if (level === 0) {
    return (
      <div className="container">
        <h1>Card Matching Game</h1>
        <LevelSelect level={level} setLevel={setLevel} />
      </div>
    );
  }

  if (level === 1) {
    const randomCard = randomisedImageArray(images, 2);
    return (
      <>
        <div className="container ">
          <h1>Easy</h1>
          <div className="cardDiv1 ">
            {randomCard.map((image, index) => (
              <div key={index}>
                <Card image={image} index={index} />
              </div>
            ))}
          </div>
          <button
            className="finish"
            onClick={() => {
              setLevel(4);
            }}
          >
            Finish
          </button>
        </div>
      </>
    );
  }
  if (level === 2) {
    const randomCard = randomisedImageArray(imageArray, 4);
    return (
      <>
        <div className="container">
          <h1>Medium</h1>
          <div className="cardDiv2 ">
            {randomCard.map((card, index) => (
              <div>
                <Card card={card} index={index} />
              </div>
            ))}
          </div>
          <button
            className="finish"
            onClick={() => {
              setLevel(4);
            }}
          >
            Finish
          </button>
        </div>
      </>
    );
  }
  if (level === 3) {
    const randomCard = randomisedImageArray(imageArray, 8);
    return (
      <>
        <div className="container">
          <h1>Hard</h1>
          <div className="cardDiv3">
            {randomCard.map((card, index) => (
              <div>
                <Card card={card} index={index} />
              </div>
            ))}
          </div>
          <button
            className="finish"
            onClick={() => {
              setLevel(4);
            }}
          >
            Finish
          </button>
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
