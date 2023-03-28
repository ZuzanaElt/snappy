import React, { useEffect, useState } from "react";
import LevelSelect from "../components/levelSelect/LevelSelect";
import Card from "../components/card";
import WellDone from "../components/well-done/WellDone";
import { supabase } from "../lib/supabaseClient";
import "../scss/pages/game.scss";
import correct from "../correct.mp3";
import wrong from "../wrong.mp3";

const CardMatchGame = ({ level, setLevel }) => {
  const [images, setImages] = useState([]);
  const [cards, setCards] = useState([]);
  const [playCards, setPlayCards] = useState([]);
  const [guesses, setGuesses] = useState(0);
  const [guessOne, setGuessOne] = useState(null);
  const [guessTwo, setGuessTwo] = useState(null);
  const [inactive, setInactive] = useState(false);

  let localArray = [];

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
    populateLocalArray();
    // eslint-disable-next-line
  }, [images]);

  const populateLocalArray = () => {
    const baseUrl =
      "https://qkyymgacogibwsilrvrp.supabase.co/storage/v1/object/public/game-images/";
    localArray = images;
    localArray.forEach((element) => {
      element.matched = false;
      element.src = baseUrl + element.name;
    });
    setCards(localArray);
  };

  // eslint-disable-next-line
  const randomisedImageArray = (num) => {
    const cardsFromArray = cards.sort(() => Math.random() - 0.5).slice(0, num);
    const randomisedCards = [...cardsFromArray, ...cardsFromArray].sort(
      () => Math.random() - 0.5
    );
    const cardsWithKey = randomisedCards.map((card) => ({
      ...card,
      key: Math.random(),
    }));
    setGuessOne(null);
    setGuessTwo(null);
    setPlayCards(cardsWithKey);
    setGuesses(0);
  };

  const handleChoice = (card) => {
    guessOne ? setGuessTwo(card) : setGuessOne(card);
  };

  // eslint-disable-next-line
  const audio = new Audio(correct);
  // eslint-disable-next-line
  const incorrectAudio = new Audio(wrong);

  useEffect(() => {
    if (guessOne && guessTwo) {
      setInactive(true);
      if (guessOne.id === guessTwo.id) {
        setPlayCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.id === guessOne.id) {
              setCorrectGuesses((prevCorrect) => prevCorrect + 1);
              setTimeout(() => audio.play(), 500);
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        reset();
      } else {
        setTimeout(() => incorrectAudio.play(), 500);
        setTimeout(() => reset(), 1000);
      }
    }
// eslint-disable-next-line
  }, [guessOne, guessTwo]);

  const reset = () => {
    setGuessOne(null);
    setGuessTwo(null);
    setGuesses((prevGuesses) => prevGuesses + 1);
    setInactive(false);
  };

  useEffect(() => {
    if (level === 0 && correctGuesses === 4) {
      setLevel(4);
    }
  }, [correctGuesses, level, setLevel]);

  useEffect(() => {
    if (level === 1) {
      setCorrectGuesses(0);
      randomisedImageArray(2);
    } else if (level === 2) {
      setCorrectGuesses(0);
      randomisedImageArray(4);
    } else if (level === 3) {
      setCorrectGuesses(0);
      randomisedImageArray(8);
    } else {
      setLevel(0);
    }

// eslint-disable-next-line
  }, [level]);

  if (level === 0) {
    return (
      <div className="container">
        <LevelSelect level={level} setLevel={setLevel} />
      </div>
    );
  }

  if (level === 1 || level === 2 || level === 3) {
    const gameCards = playCards;
    return (
      <div className="container">
        <h1 className="gameTitle">Try to match the cards!</h1>
        <p> Guesses: {guesses}</p>
        <div className="card-grid">
          {gameCards.map((card, index) => (
            <Card
              key={index}
              handleChoice={handleChoice}
              card={card}
              flipped={card === guessOne || card === guessTwo || card.matched}
              inactive={inactive}
            />
          ))}
        </div>
      </div>
    );
  }

  if (level === 4) {
    return (
      <>
        <div>
          <WellDone level={level} setLevel={setLevel} guesses={guesses} />
        </div>
      </>
    );
  }
};

export default CardMatchGame;
