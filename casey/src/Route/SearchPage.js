import React from "react";
import CardDiv from "../components/Card/CardDiv";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import SearchBar from "../components/Search/SearchBar"
import {ThemeProvider, Paper} from "@material-ui/core"
import theme from "../style/theme"



function SearchPage() {
  return (
    <div>
      <NavBar />
    <paper>
        <Header />
    </paper>
     
    <CardDiv />
     
     
    </div>
  );
}


export default SearchPage;