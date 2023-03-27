import React, { useEffect, useState } from "react";
import LevelSelect from "../components/levelSelect/LevelSelect";
import Card from "../components/card";
import WellDone from "../components/well-done/WellDone";
import { supabase } from "../lib/supabaseClient";
import "../scss/pages/game.scss";

const CardMatchGame = ({ level, setLevel}) => {

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
    getImages()
  }, [])

  useEffect(() => {
    console.log("images array:", images);
    populateLocalArray()
    console.log("localArray:", localArray);
  }, [images])

  useEffect(() => {
    console.log("cards array:", cards);
  }, [cards])

  const populateLocalArray = () => {
    const baseUrl =
    "https://qkyymgacogibwsilrvrp.supabase.co/storage/v1/object/public/game-images/"
    localArray = images
    localArray.forEach((element) => {
      element.matched = false
      element.src = baseUrl + element.name
    });
    setCards(localArray)
  }
  
  const randomisedImageArray = (num) => {
    const cardsFromArray = cards
      .sort(() => Math.random() - 0.5)
      .slice(0, num)
    const randomisedCards = [...cardsFromArray, ...cardsFromArray]
      .sort(() => Math.random() - 0.5)
    const cardsWithKey = randomisedCards.map((card) => ({ ...card, key: Math.random() }))
      setGuessOne(null)
      setGuessTwo(null)
      setPlayCards(cardsWithKey)
      setGuesses(0)
  };

  const handleChoice = (card) => {
    guessOne ? setGuessTwo(card) : setGuessOne(card)
  }

  useEffect(() => {
    if (guessOne && guessTwo) {
      setInactive(true)
      if (guessOne.src === guessTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === guessOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        reset()
      } else {
        setTimeout(() => reset(), 1000)
      }
    }
  }, [guessOne, guessTwo]);

  const reset = () => {
    setGuessOne(null)
    setGuessTwo(null)
    setGuesses(prevGuesses => prevGuesses + 1)
    setInactive(false)
  }

  useEffect(() => {
    if(level === 1) {
      randomisedImageArray(2)
    }
  }, [level])

  if (level === 0) {
    return (
      <div className="container">
        <h1>Card Matching Game</h1>
        <LevelSelect level={level} setLevel={setLevel} />
      </div>
    );
  }

  if (level === 1) {
    const gameCards = playCards
    return (
      <div className="container">
        <h1>Card match</h1>
        <div className='card-grid'>
          {gameCards.map(card => (
              <Card
                handleChoice={handleChoice}
                card={card}
                flipped={card === guessOne || card === guessTwo || card.matched}
                inactive={inactive}
              />
          ))}
        </div>
        <p> Guesses: {guesses}</p>
        <button
            className="finish"
            onClick={() => {
              setLevel(4);
            }}
          >
            Finish
          </button>
      </div>
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

}

export default CardMatchGame;
