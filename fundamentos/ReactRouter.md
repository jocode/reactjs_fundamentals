# React Router

Las aplicaciones que se trabajan en React son llamadas **single page apps**. Esto es posible gracias a **React Router** que es una librería _Open Source_.

**Multi Page Apps**: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

**Single Page Apps (SPA)**: Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

**React Router (v4)**: Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

- **BrowserRouter**: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
- **Route**: Cuando hay un match con el _path_, se hace render del _component_. El component va a recibir tres _props_: **`match, history, location`**.
- **Switch**: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
- **Link**: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.


## División de la aplicación en rutas

Para instalar **React Router** lo hacemos desde la terminal con:
- **`npm install react-router-dom`**

Como es importante usar exactamente la misma versión, del package.json en “dependencies” se quita lo que está delante del 4.

- **Link** internamente tiene un elemento `<a>` pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página.


## Mejorando la User Interface con un Layout

- **`React.Fragment`** es la herramienta que te ayudará a renderizar varios componentes y/o elementos sin necesidad de colocar un `div` o cualquier otro elemento de **HTML** para renderizar sus hijos. Al usar esta característica de React podremos renderizar un código más limpio y legible, ya que ``React.Fragment` no se renderiza en el navegador.

```js
<React.Fragment>
    {children}
</React.Fragment>
```

- El 404 es la ruta que se renderizará cuando ninguna otra coincida con la dirección ingresada.

Otra forma de hacer que todas tus URL’s que no existan sean redirigidas a tu componente de 404 sería de la siguiente forma:

```js
import { Redirect, Route } from "react-router-dom";

<Route path="/404" component={MiComponente404} />
<Redirect from="*" to="/404" />
```

Como podemos observar llamamos a nuestro componente 404 y luego utilizamos **_Redirect_**, el cual es un _componente_ de **React Router** para hacer redirecciones; en este caso hacemos que todas las URL’s que no correspondan a alguna que hayamos declarado, sean redirigidas a `MiComponente404`.



## :star: Introducción del ciclo de vida de un componente

Cuando React renderiza los componentes decimos que entran en **_escena_**, cuando _su estado cambia o recibe unos props_ diferentes se **_actualizan_** y cuando cambiamos de página se dice que se **_desmontan_**.

- **Montaje**:
    - Representa el momento donde se inserta el código del componente en el DOM.
    - Se llaman tres métodos: constructor, render, **`componentDidMount`**.

- **Actualización**:
    - Ocurre cuando los props o el estado del componente cambian.
    - Se llaman dos métodos: render, **`componentDidUpdate`**.

- **Desmontaje**:
    - Nos da la oportunidad de hacer limpieza de nuestro componente.
    - Se llama un método: **`componentWillUnmount`**.