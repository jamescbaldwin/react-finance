import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FollowIcon from "../FollowIcon"
import CardData from "../CardData"

function Cards (props) {
    return (
        <div class="card">
          <paper>
        <Card variant="outlined">
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
          {'"Stuff about Tesla!!"'}
        </Typography>
        <FollowIcon />
      </CardContent>
    </Card>
    </paper>
 </div>
       
)
};

export default Cards;