// import React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Zoom from '@material-ui/core/Zoom';
// import theme from '../style/theme';
// import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import Switch from "@material-ui/core/Switch";
// import Link from "@material-ui/core/Link"
// import Dashboard from '../Route/Dashboard';


// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     position: 'fixed',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
// }));

// function ScrollTop(props) {
//   const { children, window } = props;
//   const classes = useStyles();
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </div>
//     </Zoom>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default function BackToTop(props) {
//   return (
// <ThemeProvider theme={theme}>
//   <React.Fragment >
//       <CssBaseline />
//       <AppBar>
//         <Toolbar>

        
//         <Link to={Dashboard}> Dashboard </Link>
//         {/* <Link color="Secondary" href="/">
//           Home
//         </Link>
//         <Link color="Secondary" href="/Contact">
//           Contact
//         </Link>
//         <Link color="Secondary" href="/Resume">
//           Resume
//         </Link>
//         <Link color="Secondary" href="/About">
//           About
//         </Link> */}
//         </Toolbar>
//       </AppBar>
//       <Toolbar id="back-to-top-anchor" />
//       <a href=""> </a>
//       <ScrollTop {...props}>
//         <Fab color="secondary" size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop>
//     </React.Fragment>
//   </ThemeProvider>
//   );
// }

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import theme from '../style/theme'



const style = {
  display: 'flex',
  justifyContent: 'center'
};


export default function NavBar() {
    return (
      <Breadcrumbs style={style} aria-label="breadcrumb">
        <Link color="Secondary" href="/">
          Home
        </Link>
        <Link color="Secondary" href="/Search">
          Search
        </Link>
        <Link color="Secondary" href="/Login">
          Login
        </Link>
        <Link color="Secondary" href="/SignUp">
          Signup
        </Link>
        <Link color="Secondary" href="/About">
          About Us
        </Link>
      </Breadcrumbs>
    );
  }