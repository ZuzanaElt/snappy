import React from "react";
import { NavLink } from 'react-router-dom';

//import { FcHome } from '@react-icons/all-files/fa/FcHome';

import housePic from './house.webp';
import dinoLogo from './transparent.png';
import '../../scss/components/nav.scss'


export default function Nav({ profile, session }) {
  // if (profile) {
    return (
      <>
        <div>
          <div>
            <div className="nav-items">

              <NavLink 
                to="/"
                className='nav-home'>
                <img src={housePic} alt="home button" className="home-button" />
              </NavLink>

              <NavLink 
                to="/"
                className='nav-home'>
                <img src={dinoLogo} alt="home button" className="home-button" />
              </NavLink>

            </div>
          </div>
        </div>
        <div>{profile ? <h2>Hi, {profile.username}</h2> : <p>Hello</p>}</div>
      </>
  );
};
