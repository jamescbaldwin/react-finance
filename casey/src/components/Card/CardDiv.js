import React, { Component } from 'react';
import CardData from "./CardData";
import '../../style/style.css';
import { Grid, Paper } from '@material-ui/core';


export class CardDiv extends Component {
  render() {
    return (
          
            <div> 
              <CardData />   
            </div>
          
   
    )
  }
};

  export default CardDiv;