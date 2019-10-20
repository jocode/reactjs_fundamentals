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
//import Badge from './components/Badge'

// Paginas
// import BadgeNew from './pages/BadgeNew';
import Badges from './pages/Badges';
// import Badge from './components/Badge';

const container = document.getElementById('app');
// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badges/>, container);