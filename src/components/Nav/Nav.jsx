import React from "react";
import { Link, NavLink } from "react-router-dom";
import profilePlaceholder from "./profile-placeholder.png";
import housePic from "./house.webp";
import dinoLogo from "./transparent.png";
import "../../scss/components/nav.scss";

export default function Nav({ profile, session, level, setLevel }) {
  function getProfileImg() {
    if (profile.avatar_url && session) {
      console.log(session);
      const baseUrl =
        "https://qkyymgacogibwsilrvrp.supabase.co/storage/v1/object/public/profile-image/";
      const profileImg = `${baseUrl}${session.user.id}/${profile.avatar_url}`;
      console.log(profileImg);
      return profileImg;
    } else {
      return profilePlaceholder;
    }
  }
  return (
    <>
      <div>
        <div>
          <div className="nav-items">
            <NavLink
              to="/"
              className="nav-home"
              onClick={() => {
                setLevel(0);
              }}
            >
              <img src={housePic} alt="home button" className="home-button" />
            </NavLink>

            <div className="nav-itemsTwo">
              <Link to="/account">
                {profile && (
// eslint-disable-next-line
                  <img className="profileImgNav" src={getProfileImg()} alt="profile image" />
                )}
              </Link>
              <NavLink to="/account" className="nav-home">
                <img src={dinoLogo} alt="home button" className="home-button" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <div>{profile ? <h2>Hi, {profile.username}</h2> : <p>Hello</p>}</div> */}
    </>
  );
}