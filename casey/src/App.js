import React from "react";
import Body from "./components/Body";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import SimpleCard from "./components/SimpleCard"

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Body />
        <NavBar />
        <SimpleCard />
      </Wrapper>
    </div>
  );
}


export default App;