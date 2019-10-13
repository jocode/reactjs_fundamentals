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
import Badge from './components/Badge'

const name = 'Camilo';
const sum = () => 3+3;
// const jsx = <h1>Hola, soy {sum()}</h1>;

const jsx = (
  <div>
  <h1>Hola soy Johan</h1>
  <p>Soy ingeniero Electrónico</p>
</div>
);
// const element = React.createElement('a', {href: 'https://jocode.github.io'}, 'Hola!, Soy el children');
const element = React.createElement('h1', {}, `Hola jaja, soy ${name}`);

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge firstName="Johan" 
lastName="Mosquera" 
avatarUrl="https://avatars0.githubusercontent.com/u/24928806?s=460&v=4"
jobTitle="Frontent & Backend Developer"
twitter="jocode"
/>, container);