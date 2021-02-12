import React from "react";
import CardDiv from "./components/Card/CardDiv";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SearchBar from "./components/Search/SearchBar"
import {ThemeProvider, Paper} from "@material-ui/core"
import theme from "./theme"



function SearchPage() {
  return (
    <div className="App">
  
     
      <NavBar />
      <paper>
      <Header />
      </paper>
     
      <CardDiv />
     
     
    </div>
  );
}


export default SearchPage;