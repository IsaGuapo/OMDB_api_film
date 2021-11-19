const { application } = require('express')
const peliculaApi = require('../controllers/peliculaApi')
const routes = require('express').Router() //redirecciona a routes

//rutas para pintar el formulario de home, que sera llamadas en el index despues
routes.get("/api", peliculaApi.home)

//Hacemos un post del formulario
routes.post("/api/film", peliculaApi.createPelicula)



//exportara todas las rutas creadas
module.exports = routes;