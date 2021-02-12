import React, { Component } from 'react';
import "../style/style.css"
import Searchbar from './Search/SearchBar';
import TrendingUpTwoToneIcon from '@material-ui/icons/TrendingUpTwoTone';


function Header() {
  return (
 <paper>
    <h1>Search Stocks<TrendingUpTwoToneIcon /></h1>
    <Searchbar class='search' />
  </paper>
    )
  };


export default Header;