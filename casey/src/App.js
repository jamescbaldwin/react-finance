import React, { Component } from "react";
import ProfileSO from './components/Popover'
import LoginButton from "./components/LoginButton"
import LogoutButton from "./components/LogoutButton"

function App() {
  return (
    <>
      <ProfileSO />
     <LoginButton />
     <LogoutButton />
     </>
  );
}

export default App;