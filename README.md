# Mapa-Interactivo-Web

Leer notas.txt

Descripción
Mapa interactivo de Nicaragua. Hecho con python-Flask, html, scss, javascript y MySQL como gestor de Base de Datos 
El proyecto pretende crear una página Web que sea utilizada para mostrar información sobre los distintos departamentos 
del país en los apartados de Geografía, Historia y Cultura ademas de un minijuego interactivo al estilo de preguntados.
Este proyecto fue desarrollado como continuacion del proyecto cs50w-project4 y entregado para la clase de Matematicas Discretas en 2022
- https://github.com/BlueAACJ/cs50w-project4

Tecnologías: 
 - python: Flask 
 - html: html 5 
 - scss: Para dar estilos al proyecto 
 - JavaScript: para el minijuego/test de la pagina web
 - MySQL: Gestor de Base de Datos

Estructura del Repositorio: 
- templates: Contiene todos los html que usa la página web 
- Cultura: Contiene todos los archivos con la distinta información de los departamentos sobre su cultura 
- dirección imagenes: contiene las direcciones de las imagenes a mostrar al usuario 
- Geografía:  Contiene todos los archivos con la distinta información de los departamentos sobre su Geografía 
- Historia: Contiene todos los archivos con la distinta información de los departamentos sobre su Historia 
- Preguntas: contiene las preguntas y las respuestas del apartado de preguntados
- Querys: contiene las querys de creacion de la Base de Datos
- Static: contiene los estilos, imagenes y .js 
    - image: contiene las imagenes utililzadas en el proyecto 
    - Style: contiene el archivo. scss que da estilos al proyecto
    - scripts.js:  contiene el codigo del minijuego implementado en el proyecto 
- application.py: la aplicación de flask
- archivos.py: el script para subir la información de cultura, geografía, historia y preguntas a la base de datos 
- config: tiene las configuraciones de la base datos y las del flask 
- funciones: contiene las funciones extras del programa como lo es limpiarlinea que limpia el formato de los html que muestran la información 
- requirements: contiene los requerimientos para correr el proyecto

- notas: Contiene la estructura de las variables de entorno, la explicacion de los archivos de configuracion y una guia para ejecutar el proyecto
