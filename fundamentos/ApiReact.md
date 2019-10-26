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

En este caso se ha simulado una API mediante javascript

## Solicitando datos (GET)

Para solicitar los datos, es buena práctica hacer las llamadas en el ciclo de vida **`componentDidMount()`**, porque con ello estamos seguros que el contenido ya se ha renderizado correctamente en el navegador.


## Enviando datos (POST)

MD5 es una pequeña librería a la cual se le da un texto y ella regresa un hash.

Podremos hacer pruebas para cifrar nuestros textos a md5 en el siguiente sitio MD5 Online

Hola Platzi = d3bfb9302fb1007c0f996b41cba2818c


## Manejando los estados de la petición durante el POST

De la misma manera en la que se manejan los estados cuando se solicitan datos, deben ser manejados cuando los datos son enviados.

Existe un tiempo entre que se da clic y los datos son enviados. Ese tiempo de espera es necesario visualizarlo. Igual hay que mostrar mensajes de error cuando no funcionan las cosas.


## Actualizando datos (PUT)

Para crear una vista de actualizar datos, es muy sencillo. Sólo necesitamos tomar una copia de badgeNew y adaptarla a BadgeEdit para llamar la api que nos actualizará la información


## Actualizaciones automáticas

**Polling** consiste en que cada cierto tiempo que es definido por nosotros se buscan los datos y se actualizan automáticamente. Esto se hará constantemente hasta que el usuario se vaya de la página.

