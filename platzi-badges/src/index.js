/* 
const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges!';

const container = document.getElementById('app');

container.appendChild(element); 
*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import './global.css'

// SPA in component App
import App from './components/App'
import Rick from './components/Rick';

const container = document.getElementById('app');
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Rick/>, container);