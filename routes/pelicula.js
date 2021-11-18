//3º paso --crear las rutas
const routes = require('express').Router() //redirecciona a routes
const pelicula = require('../controllers/pelicula')

//etorna un JSON con los detalles de la peli en concreto buscada.
//ejmplo en navegador: http://localhost:3000/api/film/it
routes.get('/api/film/:title', pelicula.findFilms);

module.exports = routes;