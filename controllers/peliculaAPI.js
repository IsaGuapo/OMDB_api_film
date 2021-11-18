const {pelicula} = require('./pelicula')
const utils = require('../utils/pelicula')

const home = (req,res) =>{
    res.render('home')
}

const createPelicula = (req,res) => {
    const dataPeli ={
        "Titulo": req.body.title,
        "Director": req.body.director,
        "Año": req.body.year,
        "Mensaje": `La pelicula ${req.body.title} ha sido guardada correctamente`,
    }
    return res.status(200).json(dataPeli)
}

const pelicreada ={
    home,
    createPelicula
}

module.exports = pelicreada;