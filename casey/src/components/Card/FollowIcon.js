import React from 'react';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/typography'

export default function FollowIcon() {
  const [state, setState] = React.useState({
    checkedA: true
    // checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        color="primary"
      />
      <Typography variant="h5" component="h4">
        {'Add to Dashboard'}
        </Typography>
    </div>
  );
}

