import React, { Component } from 'react';
import "../style/style.css"
import SearchBar from './Search/SearchBar';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';


export class Header extends Component {
  render() {
    return (
  <div class='header'>
    <h1>Search Stocks   <TrendingUpTwoToneIcon /> </h1>
    <SearchBar />
  </div>
    )
  }
};






  export default Header;