import React from "react";
import "../../scss/components/well-done.scss";

const WellDone = ({ level, setLevel }) => {
  return (
    <div className="container">
      <h1 className="level-select">Well done!</h1>
      <p className="wellDoneMessage">You managed to match <span className="matchedCards">##</span> cards</p>
      <div className="retry">
        <button
          onClick={() => {
            setLevel(0);
          }}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default WellDone;
