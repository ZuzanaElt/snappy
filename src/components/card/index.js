import React, {  useState } from "react";
import dino from "./dino.png"
import house from "./house.webp";
import ReactCardFlip from "react-card-flip";


export default function Card({card,index}){

const[ flipped,setflipped] = useState(false); 

const handleClick = () => {
  setflipped(!flipped)
}


return(
  <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className="">
          <div className="">
              <button className="back-flip-button card" onClick={handleClick}>
                  <img className="card-back" alt="card-back" src={dino}/>
              </button>
          </div>
      </div>
      <div className="">
          <div className="">
              <button className="back-flip-button card" onClick={handleClick}>
                  <img className="card-back" alt="card-back" src={house}/>
              </button>
          </div>
      </div>
  </ReactCardFlip>

)
}
