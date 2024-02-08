import React from "react";
import Profile from "./Profile/Profile";

const user={
  name:"Mohamed YAZIDI",
  bio:"I love coding !",
  profession:"junior web developer",
  src: "/DSC_9926.JPG"
};


export default function App() {
  const handleName = () => alert(user.name);
  return (
    <div>
      <Profile name={user.name} bio={user.bio} profession={user.profession} src={user.src} handleName={handleName} />
    </div>
  );
}

