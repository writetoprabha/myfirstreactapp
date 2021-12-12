import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';

function showTime() {
  const element = (
    <>
    <h1>Current date is {new Date().toLocaleDateString()}</h1>
    <h1> Current time is {new Date().toLocaleTimeString()}</h1>
    </>
  );
  reactDom.render(
    element,
    document.getElementById('root')
  );
}

setInterval(showTime, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
