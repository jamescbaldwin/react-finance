import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Application/index"
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
  domain='dev-qis32-84.us.auth0.com'
  clientId='ajG34zVt4aOJ2ekaEWwBY40y2XozQozF'
  redirectUrl={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
