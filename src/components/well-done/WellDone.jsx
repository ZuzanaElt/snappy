import React from "react";
import "../../scss/components/well-done.scss";
import star from "../../images/red-star.png"
import flyingdino from "../../images/flyingdino.png"
import yellowstar from "../../images/yellow-star.png"

const WellDone = ({ setLevel, guesses }) => {
  return (
    <div className="container">
      <div className="dino-div">
          <img src={flyingdino} className="dino-well-done" alt="dino"/>
          <img src={flyingdino} className="dino2-well-done" alt="dino"/>
          <img src={flyingdino} className="dino2-well-done" alt="dino"/>
      </div>
      <h1 className="level-select mobile-container">
          <img src={yellowstar} className="yellow-star1" alt="yellow star"/>Well done! <img src={star} className="star" alt="star"/>
          <img src={yellowstar} className="yellow-star" alt="yellow star"/>
      </h1>
      <p className="wellDoneMessage">You matched all the cards, and it only took you {guesses} guesses!</p>
      <div className="retry">
      
        <button
          onClick={() => {
            setLevel(0);
          }}
        >
          Play again
        </button>
        
      </div>
      
      
    </div>
  );
};

export default WellDone;
