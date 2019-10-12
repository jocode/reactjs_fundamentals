# 1. Comenzando con React

## 1. ¿Qué es React?

Es una biblioteca (Librería) para construir interfaces.

Cuando trabajamos con *react nos centramos en la interfaz*, para trabajar rutas usamos react router y para el manejo de datos redux u otra biblioteca.

- **mVc** Con react sólo nos centramos en la vista. No nos preocupamos por el modelo y la lógica de negocio.


## 1.2 Virtual DOM

**DOM** Document Object Model. Es la forma como se representa la estructura html en el navegador.

React lo que hace es tomar una copia exacta del  DOM y *guarda en memoria el virtual DOM*; luego compara las diferencias entre ellos y sólo renderiza la parte que ha cambiado de estado.


## Componentes

Cuando trabajamos en react, debemos pensar en componentes. Los **componentes** son piezas de código  reutilizables.

Cada cosa que podamos reutilizar, será un componente.


## Instalando la primera App

Debemos descargar NodeJS y npm. *npm* significa node package manager.

Nos ubicamos en la carpeta donde queremos crear nuestro proyecto y usamos el comando

- **`npx create-react-app  primer-proyecto`**

Con **npx** no hay necesidad de descargar el paquete necesario para usar la librería

create-react-app por defecto usa git y nos crea un primer commit.

- Estructura de archivos
  - **node_modules** Son todas las dependencias que usa nuestro proyecto
  - **public** Es la que el navegador entiende
  - **src** Aquí está el código fuente de la aplicación creada con react

**index.js** es el punto de entrada de la aplicación.


## Dependencias

El **`packaje.json`** es un objeto de javascript donde encontramos todos los detalles de nuestro objeto.

Las dependencias son las bibliotecas que nuestro proyecto necesita.

## Scripts

Los script de react son importados por la biblioteca *react-scripts*

- **yarn** es un manejador de paquetes creados por los creadores de react

**`npm install -g yarn`**


Con **`npm build`** nos crea los archivos necesarios para producción, nos crea un archivo minificado de javascript y un index.html

Con **`npm test`** ejecutamos archivos para verificar las pruebas.


## Recomendaciones

- Si se ha ejecutado el comando **`npm eject`** aparecerá un error al ejecutar **npm start**. Para solucionar este problema, podemos usar el comando `sudo rm -R node_modules/` para eliminar los modulos de node y luego ejecutar `npm` para que se instalen nuevamente las dependencias

- Otra herramienta útil es instalar la extensión **react developer tools**