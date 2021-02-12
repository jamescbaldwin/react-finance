import React from "react";
import CardDiv from "./components/Card/CardDiv";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SearchBar from "./components/Search/SearchBar"


function App() {
  return (
    <div className="App">
      <Wrapper>
      <NavBar />
      <Header />
      {/* <Header /> */}
      <CardDiv />
      </Wrapper>
    </div>
  );
}


export default App;