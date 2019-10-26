# Llamadas a un API

Las llamadas a una API siguen un patrón similar siempre que las hacemos, cada llamada consta de tres estados:

- **Loading**: cuando la petición se envía y estamos esperando.
- **Error**: se debe dejar un mensaje para el usuario para arreglar el error o volver a intentarlo.
- **Data**: los datos nos pueden llegar de dos formas, o en error o con los datos requeridos.


![Introducción a la llamada a una API](https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202019-09-19%20a%20la%28s%29%2007.37.34-9d443d5c-3404-4ee4-8f37-d67b5bd7839a.jpg)

## React.js: Cómo traer datos de un API en React

Una llamada a una **API** es un proceso asíncrono, es decir que lo comenzamos pero no sabemos cuándo acabará. Por lo mismo la función a escribir debe ser asíncrona.
La llamada se hará usando **`fetch`** que es una función de React que al pasarle una dirección de internet, hará una petición **GET** y lo que sea que exista ahí será devuelto.

[Ver el archivo de ejemplo - Rick.js](../platzi-badges/src/components/Rick.js)
