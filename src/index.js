import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import Board from './components/Board';
import Candidate from './components/Candidate';
import Home from './components/Home';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Home />
    <Board />
    <Candidate />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
