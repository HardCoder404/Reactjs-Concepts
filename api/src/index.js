import React from 'react';
import ReactDOM from 'react-dom/client';
import GetApi from './GetApi';
import PostApi from './PostApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <GetApi /> */}
    <PostApi/>
  </React.StrictMode>
);
