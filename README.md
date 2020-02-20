# Curso ReactJS desde Cero

Programa tus aplicaciones web con la librería frontend que usa Facebook e Instagram.

## ¿Qué es React?

Es una biblioteca (Librería) para construir interfaces.

En este repositorio se encuentra un proyecto llamado Platzi-Badges, donde utilizamos ReactJS como herramienta para desarrollo frontend. La explicación de cada funcionalidad está en los archivos Markdown _`.md`_ del repositorio.


## Deploy aplicación `create-react-app` en Github Pages

1. Agregar el homePage

En el archivo `packaje.json` agregar la propiedad *homepage*

- `"homepage":"https://yourusername.github.io/repository-name"`

Reemplazar el nombre de usuario y el nombre del repositorio


2. Instalar **`gh-pages`**

Instalar el paquete llamado `gh-pages`

- `npm install --save gh-pages`


3. Deploy script

Agregamos los comandos deploy scripts en el archivo `package.json` 

```js
"scripts":{
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
}
```

Y ejecutamos el comando 

- `npm run deploy`


4. Setup source to gh-pages branch

Finalmente seleccionamos la rama **_gh-pages_** en github para realizar el deploy de la aplicación.


Referencias [How to deploy a create react app to Github pages](https://reactgo.com/deploy-react-app-github-pages/)
