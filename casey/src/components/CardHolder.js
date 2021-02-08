import React, { Component } from 'react';
import "../style/style.css"
import CardData from "../components/CardData"

export class CardHolder extends Component {
  render() {
    return (
  <div class='holder'>
     <CardData />  
  </div>
    )
  }
};

  export default CardHolder;