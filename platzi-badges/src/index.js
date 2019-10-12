/* 
const element = document.createElement('h1');
element.innerText = 'Hello, Platzi Badges!';

const container = document.getElementById('app');

container.appendChild(element); 
*/

import React from 'react';
import ReactDOM from 'react-dom';

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
ReactDOM.render(jsx, container);