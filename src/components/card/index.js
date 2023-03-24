import React from "react";



export default function Card({ card, index }) {
  return (
    <>
       <div>
          <div className="card">
            <div>
            <img src="./background.png"/>
             <p>{card}</p>
            </div>
            
          </div>
      </div>
    </>
  );
}
