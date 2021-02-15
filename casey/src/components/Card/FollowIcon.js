import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/typography';
import Checkbox from '@material-ui/core/Checkbox';
import { Component, state, setState } from 'react';



  export default function FollowIcon() {
    const [checked, setChecked] = React.useState(true);
  
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Checkbox
        defaultChecked
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <Typography variant="h5" component="h4">
            {/* defaultChecked = true  : {'Following} ? {'Follow'}  */}
        </Typography>
    </div>
  );
}

