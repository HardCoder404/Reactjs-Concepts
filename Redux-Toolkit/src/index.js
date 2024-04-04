import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css";
import { store } from './Redux/store/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>
);






/* 
  Step 9 : store ko import kro jo tumne Redux folder k andr.. store.jsx file bnaya tha, and Provider ko 
  Step 10 : apne app component ko Provider se wrap krdo.. jaise uppr kia hai maine ...or store propery initialise krdo uske andr jaise upper kia hai...
*/