import React, { Component } from 'react';
import "../style/style.css"
import SimpleCard from "./SimpleCard"

export class CardHolder extends Component {
  render() {
    return (
  <div class="container" id='cardHolder'>
   <div class="row">
     <div class="column">
<SimpleCard />
<SimpleCard />
<SimpleCard />
<SimpleCard />
<SimpleCard />
<SimpleCard />

     </div>
   </div>
  </div>
    )
  }
};






  export default CardHolder;