import React from "react";
import "../../scss/components/level-select.scss";

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
          Easy
        </button>
        <button
          onClick={() => {
            setLevel(2);
          }}
        >
          Medium
        </button>
        <button
          onClick={() => {
            setLevel(3);
          }}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default LevelSelect;
