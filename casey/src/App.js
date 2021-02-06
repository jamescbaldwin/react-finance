import React from "react";
import Body from "./components/CardHolder";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header"
import CardHolder from "./components/CardHolder"


function App() {
  return (
    <div className="App">
      <Wrapper>
      <NavBar />
      <Header />
        <Body />
        <CardHolder />
      </Wrapper>
    </div>
  );
}


export default App;