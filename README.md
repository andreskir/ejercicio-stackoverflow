Ejercicio Stackoverflow
=======

### Introducción
Esta es una aplicación que perminte navegar la información de usuarios y preguntas de stackoverlow a través de su API.
[Ver documentación](https://api.stackexchange.com/docs)

### Objetivo

1. Desarrollar la ficha de usuario: Al hacer click en el nombre de un usuario debería redirigir a otra vista donde debería mostrar:
  Nombre de usuario, foto, reputación, listado de preguntas realizadas.
  Por pregunta mostrar el título de la misma (con link a la página correspondiente de stackoverflow), 
__last_activity_date__, __creation_date__, __votes__, __relevance__ y tags.
2. Incluir un selector en la vista de usuario que permita reordenar las preguntas mostradas según: __last_activity_date__, __creation_date__, __votes__, __relevance__
3. Modificar la vista con el listado de usuarios de forma que al hacer click en el nombre de un usuario redirija a la ficha solamente si el usuario tiene más de 75 gold badges. En caso contrario debería mostrar un mesjae de alerta que diga: "Solo se pueden ver las preguntas de los usuarios más grosos"
   
En todos los casos realizar los tests unitarios que crea necesarios. 

### Tecnologías

- [AngularJs](https://angularjs.org/): MVW (Model-View-Whatever), resuelve concerns de vista, DI, comunicación con servidor, etc
- [Lo-Dash](http://lodash.com/): librería de utilidades varias, sobre todo interesantes para trabajar con colecciones de forma funcional
- [Grunt](http://gruntjs.com/): task runner para automatizar la tarea de levantar el servidor y refrescar ante un cambio en el código

### Cómo correr la aplicación y los tests?

- Instalación de dependencias / setup inicial: `npm install && bower install`
- Servidor: `grunt serve`
- Tests: `grunt test`

Ambos comandos se quedan monitoreando cambios, por lo que conviene correrlos en 2 terminales diferentes.

