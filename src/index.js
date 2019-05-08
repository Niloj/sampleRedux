import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts';
import Postform from './components/Postform';

ReactDOM.render(
  <div className="ui container">
    <Postform />
    <hr />
    <Posts />
  </div>,
  document.querySelector('#root')
);
