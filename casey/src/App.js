import React from "react";
import Body from "./components/CardHolder";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import SimpleCard from "./components/SimpleCard"

function App() {
  return (
    <div className="App">
      <Wrapper>
      <NavBar />
        <Body />
      </Wrapper>
    </div>
  );
}


export default App;