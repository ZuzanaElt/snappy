import React from "react";
import "../../scss/components/level-select.scss";
import star from "../../images/red-star.png"

const LevelSelect = ({ level, setLevel }) => {
  return (
    <div className="container">
      <h1 className="level-select">Select a level!</h1>
      <div className="level-links">
        <button
          onClick={() => {
            setLevel(1);
          }}
        >
        <img src={star} className="star" alt="Easy"/>
        </button>
        <button
          onClick={() => {
            setLevel(2);
          }}
        >
          <img src={star} className="star" alt="Medium"/>
          <img src={star} className="star" alt="Medium"/>
        </button>
        <button
          onClick={() => {
            setLevel(3);
          }}
        > 
          <img src={star} className="star" alt="Hard"/>
          <img src={star} className="star" alt="Hard"/>
          <img src={star} className="star" alt="Hard"/>
        </button>
      </div>
      
    </div>
  );
};

export default LevelSelect;
