import React from "react";
//import { NavLink } from 'react-router-dom';
import "../scss/pages/level-select.scss";

const LevelSelect = ({ level, setLevel }) => {
  const handleEasyClick = () => {
    setLevel(1);
  };

  const handleMediumClick = () => {
    setLevel(2);
  };

  const handleHardClick = () => {
    setLevel(3);
  };
  return (
    <div className="container">
      <h1 className="level-select">Select a level!</h1>
      <div className="level-links">
        <button onClick={handleEasyClick}>Easy</button>
        <button
          onClick={() => {
            level = "2";
            console.log("this is level ", level);
          }}
        >
          Medium
        </button>
        <button
          onClick={() => {
            level = "3";
            console.log("this is level ", level);
          }}
        >
          Hard
        </button>

        {/* <button onClick={() => {level ="1"; console.log("success")}}>
                        <NavLink
                        to="/level-select/easy"
                        className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        
                        > Easy
                        </NavLink> 
                </button>

                <button onClick={() => {level ="2"; console.log("success")}}>
                        <NavLink
                        to="/level-select/medium"
                        className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        
                        > Medium
                        </NavLink> 
                </button>

                <button onClick={() => {level ="3"; console.log("success")}}>
                        <NavLink
                        to="/level-select/hard"
                        className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        
                        > Hard
                        </NavLink> 
                </button> */}
      </div>
    </div>
  );
};

export default LevelSelect;
