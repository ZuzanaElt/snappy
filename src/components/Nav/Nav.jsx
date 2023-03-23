import React from "react";

export default function Nav({ profile, session }) {
  if (profile) {
    return (
      <div>{profile ? <h2>Hi, {profile.username}</h2> : <p>Hello</p>}</div>
    );
  }
}
