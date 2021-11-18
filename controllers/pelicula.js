// 2º paso -- PARA GET
const dataPeli= require('../utils/pelicula')

//funcion para encontrar peli y sacar datos
const findFilms = async (req, res) => {
    const data = await dataPeli.getfilmsUrl(req.params.title) //api/film/:title AQUI LLAMO AL MODULO DATAPELI + FUNCION getfilmsUrl
    if(req.params.title){
        res.status(200).json(data)
    }  
}

const damePeli = {
    findFilms
}

module.exports = damePeli