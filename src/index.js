// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
// import { Auth0Provider } from '@auth0/auth0-react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </BrowserRouter>
  
// );


// reportWebVitals();



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-0q5j2f2np8tco5nk.us.auth0.com"
        clientId="RJk6H0ECEKKYy1XRyHh3s2aTeleEbvgB"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
