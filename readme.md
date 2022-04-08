# API_Videoclub

##### Proyecto de introducción al Back-end.

## Comenzando 🎉️

Como se lee en el encabezado, esto es un pequeña api que consta de dos entidades, con una de la lista de películas y otra la lista de usuarios, en las cuales hemos implementado un CRUD para cada uno de ellos.

Empecemos por la entidad USERS:

En la carpeta de usuarios encontraremos 3 subcarpetas que son controller, model y router.

- ROUTER:
  Aquí se ven al principio la importación de las librerías utilizadas para el proyecto.
  a continuación se verán todos los endpoints utilizados:
  - Post de usuarios con la ruta "/user".
  - Post de usuarios para el login con la ruta "/login", con pasarle un email y una contraseña por el body.
  - Get de usuarios con la ruta "/user" para buscar un usuario por el nombre, si ese usuario no existe te devuelve toda la lista de usuarios.
  - Get de usuario con la ruta "/user/:id"para buscarlos por Id.
  - Get de autenticación del token de usuario con la ruta "/auth/:token" para descifrar el token generado anteriormente y saber que tipo de role tiene.
  - Path con la ruta "/user" para buscar datos de un usuario por la query params y modificandolo por el body.
  - Delete con la ruta "/user/:id" para borrar un usuario a través de su Id.
  - Tenemos un middelware llamado authoritation_admin para restringir ciertas gestiones sólo para los administradores y otro middelware de solo autoritation para permitir las gestiones para los clientes.
- MODEL:
  - Aquí tenemos el esquema de cómo esta la estructura de nuestros objetos.
- CONTROLLER:
  - Aquí está toda la lógica de nuestro sistema, desde aquí se exportan las funciones para poder ser ejecutadas cuando se las llaman.

Entidad Movies:

Aquí igual que en la de usuarios también encontraremos 3 subcarpetas con los mismos nombres cuyo funciones son iguales con diferentes endpoints

- ROUTES:
  - Post de películas con la ruta "/movies" para insertar una nueva película por el body.
  - Get de películas con la ruta"/movies" para poder buscar por nombre, género, actores a través de query params.
  - Get de películas con la ruta "/movies/:id" para una búsqueda de películas por su Id.
  - Patch de películas con la ruta "/movies" para buscar una película por su nombre por la query params y editarla por el body.
  - Delete de películas con la ruta"/movies" para borrar alguna película buscandolas por el nombre en la query params.

### Construido con:

---

El Stack tecnológico de esta Api han sido:

😄 El Famoso Java Script.

🚀️ Base de datos con MongoDB.

🎉️ Entorno de ejecución Node Js.

![imagen](images/js.png)![imagen](images/mongodb.png)

![imagen](images/Node.js_logo.svg)

#### Enlaces

---

Aquí abajo teneis el link al repositorio de GitHub:

[https://github.com/SusanaChen03/Backend_Videoclub](https://https://github.com/SusanaChen03/Backend_Videoclub)

Heroku Git Url

[https://git.heroku.com/newproyect00.git](https://https://git.heroku.com/newproyect00.git)
