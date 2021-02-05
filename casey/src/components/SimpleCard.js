import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FollowIcon from "./SideBar"
const useStyles = makeStyles({
  
  bullet: {
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    height: 140,
    width: 100,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
   
    <Card className={classes.root} class="card">
      <CardContent class="card">
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Stock
        </Typography>
        <Typography variant="h5" component="h2">
          Te{bull}s{bull}l{bull}a
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          $$$$
        </Typography>
        <Typography variant="body2" component="p">
          Stock Report
          <br />
          {'"Stuff about Tesla!!"'}
        </Typography>
        <FollowIcon />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
     
    </Card>
    
    
  );
}
