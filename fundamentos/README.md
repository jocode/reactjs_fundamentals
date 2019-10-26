# Fundamentos

## Clonar el código de GitHub

En esta clase vamos a comenzar clonando el código del proyecto del repositorio en GitHub.

- **`$ git clone https://github.com/Sparragus/platzi-badges.git`**

Eso va a clonar el repositorio del curso a una carpeta llamada **platzi-badges**.

Ahora es necesario que te muevas a esa carpeta.

- **`$ cd platzi-badges`**


Ahora necesitamos instalar todas las dependencias necesarias para poder correr el proyecto. Lo haremos utilizando **npm**.

- **`$ npm install`**

Este proceso puede tardar un poco. Lo que esta haciendo es descargando todas las bibliotecas de código que el proyecto necesita.

Una vez haya concluido, estamos listos para echar a correr el servidor. Lo hacemos con el comando

- **`$ npm run start`**

Cuando el servidor comience, automáticamente va a abrir una pantalla en el navegador con la aplicación.

Si todo salió bien, vas a ver una pantalla que dice “Hello, Platzi Badges”.

El repositorio inicial lo encontrarás en [Sparragus/platzi-badges](https://github.com/Sparragus/platzi-badges)


**:warning: ATENCIÓN :warning:**

Si por casualidad presenta problema al ejecutar el comando `npm run start`, puede ser la terminal integrada de VSCode. Me sucedió a mí, y no se habilitaba el hotReaload, presentando errores.

## ReactDOM.render

- **React y ReactDOM** trabajarán en conjunto.
  - React como análogo a **createElement**
  - ReactDOM a **appendChild**

- **ReactDOM.render()** toma dos argumentos: *Qué* queremos renderizar y *dónde* lo queremos renderizar.

- Siempre que escribas **JSX** es requisito importar **React**.


## JSX

JSX es una extensión de JavaScript creada por Facebook para el uso con la biblioteca React. Sirve de **preprocesador** (como Sass o Stylus a CSS) y **transforma el código generado con React a JavaScript**.

JSX tiene su **alternativa** que es **React.createElement** pero es preferible JSX porque es mucho más legible y expresivo. Ambos tienen el mismo poder y la misma capacidad.

**`React.createElement`** recibe 3 argumentos:
- El tipo de elemento que estamos creando
- sus atributos o props
- y el children que es el contenido.

Ejemplo:

- `React.createElement(‘a’, { href: ‘https://platzi.com’ }, ‘Ir a Platzi’);`

En JSX se utilizan las llaves para introducir variables o expresiones de Javascript. Lo que sea que esté adentro se va a evaluar y su resultado se mostrará en pantalla.

Las expresiones pueden ser llamadas a otras funciones, cálculos matemáticos, etc. Si las expresiones son false, 0, null, undefined, entre otros, no se verán.


```js
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
ReactDOM.render(<BadgeNew/>, container);
```


## Herramientas

- El **theme** es ‘Material’: https://material-theme.site/ (uso la variación Darker High Contrast)
- **Font**: Fira Code
- También uso otro que se llama Bracket Pair Colorizer para ver los pares de paréntesis, brackets, etc: https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer
- Puede habilitar Emmet para trabajar con React. Lo puedes ver en este artículo [Enable Emmet support for JSX in Visual Studio Code | React](https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c)

```js
{
   "emmet.includeLanguages": {
      "javascript": "javascriptreact"
   }
}
```