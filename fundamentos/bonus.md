## UI Components y Container Components

En la programación es bueno separar las tareas en diferentes funciones y en React sucede lo mismo. Cuando un componente hace demasiado, probablemente es mejor dividirlo en dos.

Esta técnica de *componentes presentacionales* y *componentes container* es común, útil y hace parte de las buenas prácticas.

> Cuando un componente hace demasiado, es mejor dividirlo en dos. A esta técnica se le llama **componentes Presentacionales**  y componentes container, que es muy común y muy útil.

Buenas prácticas de programación también se debe considerar el orden de tu código.
Dividir los **_imports_** en: 
- Dependencias
- Componentes
- Assets


```js
import React, {Component} from'react'
import {Link} from'react-router-dom'

import api from'../api'
import BadgeList from'../components/BadgeList'
import Loading from'../components/Loading'
import MiniLoading from'../components/MiniLoading'
importErrorfrom'../components/Error'
import DeleteBadgeModal from'../components/DeleteBadgeModal'

import'./styles/Badges.css'
import logo from'../res/badge-header.svg'
```


## Portales

Hay momentos en los que queremos renderizar un modal, un tooltip, etc. Esto puede volverse algo complicado ya sea por la presencia de un *z-index* o un *overflow hidden*.

En estos casos lo ideal será renderizar en un nodo completamente aparte y para esto React tiene una herramienta llamada **Portales** que funcionan parecido a `ReactDOM.render`; se les dice qué se desea renderizar y dónde, con la diferencia de que ese dónde puede ser fuera de la aplicación.

```js
{ReactDOM.createPortal(qué, donde)}
```

**¿Qué es, para qué es y como podemos usar un portal modal?**

Un portal es un contenido HTML que está fuera del contenedor (el div id="app") de tu aplicación principal

Nos resulta especialmente relevante para crear Modales sin complicaciones extremas en el diseño ya que el nodo se encuentra a la misma altura que el de la App

**¿Cómo lo implemementamos?**

1. Crea el contenedor de tu modal en tu archivo index.html
`<div id="modal"> </div>`

2. En el componente donde lo vayas a utilizar importa el ReactDOM ya que a través de su método `createPortal()` invocaremos el contenedor externo que acabamos de crear

3. Crea el Portal al componente a través de `ReactDOM.createPortal()`

4. Pasa por parametro Qué renderizara y donde lo hará


## Modales

La técnica de usar componentes genéricos para crear uno nuevo especializado se llama composición y es una herramienta que todo buen programador debe saber utilizar.

## Hooks

Las funciones no tienen un estado propio que manejar como ciclos de vida a los que deben suscribirse, mientras tanto las clases sí cuentan con ello.

React tiene un feature llamado **Hooks** que permite que las funciones también tengan _features_ que solamente tienen las clases.

**Hooks**: Permiten a los componentes funcionales tener características que solo las clases tienen:
- **useState**: Para manejo de estado.
- **useEffect**: Para suscribir el componente a su ciclo de vida.
- **useReducer**: Ejecutar un efecto basado en una acción.

**Custom Hooks**: Usamos los hooks fundamentales para crear nuevos hooks custom. Estos hooks irán en su propia función y su nombre comenzará con la palabra **`use`**. Otra de sus características es que no pueden ser ejecutados condicionalmente (if).

- *useState* regresa un arreglo de dos argumentos.


**Tipos de componentes vistos hasta el momento**

- **funciones** Ese componenete no tiene un estado propio que manejar, o ciclos de vida a los que se debe suscribir

- **clases** Mientras que las clases manejan estados y el ciclo de vida.

> **Los Hooks sólo funcionan dentro de componentes funcionales.**

## Search filter

- useMemo, es una funcionalidad que tiene react para mostrar los valores ya calculados previamente, de esta manera muestra los resultados más rápido.

Los hooks, son útiles para las listas, donde se trabaja los datos.