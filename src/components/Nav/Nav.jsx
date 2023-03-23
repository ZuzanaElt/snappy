import React from "react";
//import { FcHome } from '@react-icons/all-files/fa/FcHome';
import housePic from "./house.webp";
import dinoLogo from "./transparent.png";

var styles1 = {
  display: "flexbox",
  justifyContent: "space-between",
  margin: "10px 30px",
};
var styles2 = {
  backgroundColor: "violet",
  height: "60px",
  display: "inline-flex",
  width: "100%",
  justifyContent: "space-between",
};

export default function Nav({ profile, session }) {
  // if (profile) {
  return (
    <>
      <div>
        <div style={styles2}>
          <img src={housePic} alt="home button" style={styles1} />
          <img src={dinoLogo} alt="logo" style={styles1} />
        </div>
        {/* <div>{profile ? <h2>Hi, {profile.username}</h2> : <p>Hello</p>}</div> */}
      </div>
    </>
  );
  // }
}
