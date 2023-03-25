import React, { useState } from "react";
import dino from "./dino.png";
import house from "./house.webp";
import ReactCardFlip from "react-card-flip";

export default function Card({ image, index }) {
  const baseUrl =
    "https://qkyymgacogibwsilrvrp.supabase.co/storage/v1/object/public/game-images/";

  const fullImageLink = baseUrl + image.name;
  const [flipped, setflipped] = useState(false);

  const handleClick = () => {
    setflipped(!flipped);
  };

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className="">
        <div className="">
          <button className="front-flip-button card" onClick={handleClick}>
            <img className="front-back" alt="card-front" src={dino} />
          </button>
        </div>
      </div>
      <div className="">
        <div className="">
          <button className="back-flip-button card" onClick={handleClick}>
            <img className="card-back" alt="card-back" src={fullImageLink} />
          </button>
        </div>
      </div>
    </ReactCardFlip>
  );
}
