import React from "react";
import Paper from "@material-ui/core/Paper"
import NavBar from "../components/NavBar"
import CardTest from "../components/Card/CardTest"



function Dashboard() {
    return (
      <div>
          <NavBar  className="k-button k-primary" />
        
        <h1>DASHBOARD!</h1>
        <CardTest />
        
       
      </div>
    );
  }
  


export default Dashboard;