import React from "react";
import '@progress/kendo-theme-default/dist/all.css';
// import "./style/variables.scss"
import CardDiv from "./components/Card/CardDiv";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SearchBar from "./components/Search/SearchBar"
import LoginPage from "./Route/Login/LoginPage"
import SearchPage from "./Route/Search/SearchPage"
import SignUpPage from "./Route/Login/SignUpPage"
import AboutPage from "./Route/About/AboutPage"
import Dashboard from "./Route/Dashboard/Dashboard"
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
   
    <div className="App">
      
        <Router>
          <NavBar>
     {/* className="k-button k-primary" */}
     
      {/* <Wrapper> */}
        {/* <SearchPage /> */}
            <Route path="/" exact component={Dashboard} />
            <Route path="/Search" exact component={SearchPage} />
            <Route path="/Login" exact component={LoginPage} />
            <Route path="/SignUp" exact component={SignUpPage} />
            <Route path="/About" exact component={AboutPage} />
      {/* </Wrapper> */}
          </NavBar>
        </Router>
     
    </div>
  );
}


export default App;