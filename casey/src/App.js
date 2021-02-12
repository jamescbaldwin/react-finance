import React from "react";
import CardDiv from "./components/Card/CardDiv";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SearchBar from "./components/Search/SearchBar"
import {ThemeProvider} from "@material-ui/core"
import theme from "./style/theme"

import LoginPage from "./Route/LoginPage"
import SearchPage from "./Route/SearchPage"
import SignUpPage from "./Route/SignUpPage"
import Dashboard from "./Route/Dashboard"
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Wrapper>
        <SearchPage />
        <Route path="/" exact component={Dashboard} />
        <Route path="/Search" exact component={SearchPage} />
        <Route path="/LoginPage" exact component={LoginPage} />
        <Route path="/SignUpPage" exact component={SignUpPage} />
      </Wrapper>
      </Router>
    </div>
  );
}


export default App;