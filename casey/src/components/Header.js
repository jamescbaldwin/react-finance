import React, { Component } from 'react';
import "../style/style.css"
import SearchBar from './Search/SearchBar';


export class Header extends Component {
  render() {
    return (
  <div class='header'>
    <h1>Search Stocks</h1>
    <SearchBar />
  </div>
    )
  }
};






  export default Header;