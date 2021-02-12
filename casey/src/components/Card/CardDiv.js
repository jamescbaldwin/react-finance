import React, { Component } from 'react';
import CardData from "./CardData";
import '../../style/style.css';
import { Grid } from '@material-ui/core';

export class CardDiv extends Component {
  render() {
    return (
      <Grid container spacing={3}>
      <Grid item xs={4}>
      <CardData /> 
      </Grid>
      </Grid>
    )
  }
};

  export default CardDiv;