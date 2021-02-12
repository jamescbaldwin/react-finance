import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FollowIcon from "./FollowIcon"
import CardData from "./CardData"

import {
    Grid,
    CardHeader
} from '@material-ui/core/'



function Cards (props) {
  // render() {
  //   const mystyle = {
  //     minWidth: '250px',
  //     padding: '10px,'
  //   };
  
    return (
    
        <column>
        <Card variant="elevated">
        <CardContent>
        <Typography  color="textSecondary" gutterBottom>
         {props.symbol}
        </Typography>
        <Typography variant="h5" component="h2">
        {props.name}
        </Typography>
        <Typography  color="textSecondary">
        {props.score}
        </Typography>
        <Typography variant="body2" component="p">
          Stock Report
          <br />
        </Typography>
        <FollowIcon /> 
        {"Add to Dashboard"}
      </CardContent>
    </Card>
    </column>

  )};
       

export default Cards;