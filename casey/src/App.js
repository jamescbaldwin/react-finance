import React from "react";
import Body from "./components/CardHolder";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import CardHolder from "./components/CardHolder"


function App() {
  return (
    <div className="App">
      <Wrapper>
      <NavBar />
        <Body />
        <CardHolder />
      </Wrapper>
    </div>
  );
}


export default App;