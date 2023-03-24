import React from "react";
//import { NavLink } from 'react-router-dom';
import "../scss/pages/level-select.scss";

const Choice = () => {

const imageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function randomisedImageArray(imageArray, num) {
      const mixedImages = [...imageArray].sort(() => 0.5 - Math.random());

      return mixedImages.slice(0, num);
  }


return (
    <div className="container">Hello
      <div>{randomisedImageArray(imageArray, 4)} </div>
     
       
    </div>
  );
};

export default Choice;
