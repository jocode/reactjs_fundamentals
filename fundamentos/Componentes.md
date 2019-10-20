# Creación y diseño de componentes

## Qué es un componente

Los componentes en React son **bloques de construcción**.
Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

**“Componente” vs “elemento”**
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

**Identificación de componentes**
Para identificarlos debes hacerte las siguientes preguntas:

- ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
- ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

**_Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React._**


## Qué es y cómo funciona un componente en React.js

Los componentes son como pequeños legos, que forman grandes obras.

- **Montaje** Es el Primer paso del ciclo de vida del componenete
- **Actualización** `render`, componente de confirmacion `componentDidUpdate()`, para reaccionar cambios
- **Eliminar el componente** `componentWillUnmount()`


## Nuestro primer componente

- Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
- Todos los componentes requieren por lo menos el método **render** que define cuál será el resultado que aparecerá en pantalla.
- El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.

Importante crear una carpeta para nuestros componentes, dentro de la carpeta src. La podemos llamar **components**

```js
import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render(){
    return (
      <div>
        <div>
          <img src={confLogo} alt="Imagen de la conferencia"/>
        </div>

        <div>
          <img src="https://avatars0.githubusercontent.com/u/24928806?s=460&v=4" alt="Logo"/>
          <h1>Johan <br/>Mosquera</h1>
        </div>

        <div>
          <p>Frontend & Backend Developer</p>
          <p>@jocode</p>
        </div>

        <div>#platziconf</div>
      </div>
    )
  }
}

export default Badge;
```

## Cómo aplicar estilos

- Para los estilos crearemos una carpeta llamada **Styles** y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.
- Para usar los estilos es necesario importarlos con **_import_**
- React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino **`className`**
- Es posible utilizar **Bootstrap** con React, sólo debe ser instalado con `npm install bootstrap` y debe ser *importado en el `index.js`*
- Existen **estilos** que son usados de manera **global** o en varios componentes, así que deben ser **importados en el `index.js`**

`import 'bootstrap/dist/css/bootstrap.css'`


## Props

Los **props** que es la forma corta de _properties_ son argumentos de una función y en este caso serán los atributos de nuestro componente como **class**, **src**, etc.

Estos props salen de una variable de la clase que se llama _this.props_ y los valores son asignados directamente en el **`ReactDOM.render()`**.


> Los props son argumentos, como colocamos los atributos en las etiquetas HTML normal. Para acceder a ellos usamos **this.props.nombreAtributo**


## Nuestra primera página

Las páginas en React son componentes y conseguir distinguirlas nos servirá para saber que es un componente que adentro lleva otros componentes.

- Al escribir los *props* no importa el orden en el que lo hagas, únicamente importa el nombre.

Una página es un componente que va a tener más componentes


## Enlazando Eventos

- React dispone de **eventos**. Cada vez que se recibe información en un input se obtiene un evento **onChange** y se maneja con un método de la clase **`this.handleChange`**
- Los elementos button también tienen un evento que es **onClick**.
- Cuando hay un botón dentro de un formulario, este automáticamente será de tipo **submit**. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo _button_ o manejándolo desde el formulario cuando ocurre el evento **onSubmit**.


Puede habilitar Emmet para trabajar con React. Lo puedes ver en este artículo [Enable Emmet support for JSX in Visual Studio Code | React](https://medium.com/@eshwaren/enable-emmet-support-for-jsx-in-visual-studio-code-react-f1f5dfe8809c)


> Cuando hay un botón en el formulario por defecto es de tipo Submit

## Manejo de estado

Hasta esta clase todos los componentes han obtenido su información a través de *props* que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del **state** a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

- Para guardar la información en el estado se usa una función de la clase _component_ llamada **setState** a la cual se le debe pasar un objeto con la información que se quiere guardar.
- Aunque no se ve, la información está siendo guardada en dos sitios. Cada _input_ guarda su propio valor y al tiempo la está guardando en _setState_, lo cual no es ideal. Para solucionarlo hay que _modificar los inputs_ de un estado de no controlados a controlados.


> Cada input guarda su valor, además de decirle a **`setState`**, guarda este valor, eso no es ideal, debemos tener sólo una dunte de información.

**:warning: `setState` y `state` son importatísimos en el desarrollo con react, de ahora en adelante se usará en practicamente todo.**


## Levantamiento del estado

**Levantar el estado** es una técnica de React que pone el estado en una localización donde se le pueda pasar como **_props_** a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

Algo interesante que le da el nombre a React es su parte de **_“reactivo”_** ya que cada vez que hay un cambio en el estado o en los *props* que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.


```js
handleChange = e => {
    const nextForm = this.state.form;
    nextForm[e.target.name]= e.target.value;
    this.setState({
      form: nextForm
    })
  }
```

Cada vez que hay un cambio en estado o e los props que recibe un componente, se vuelve a renderizar todo el componente y todos sus descendientes.


## Listas de componentes