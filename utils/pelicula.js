//1º paso--Aqui traemos los datos de la API, lo exporto y en controllers uso el modulo
const fetch = require('node-fetch')

const getfilmsUrl = async (movie) => {
    const API_KEY = '85e1c0eb';
    const data = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`)
    const films = await data.json()
    return films
}


const films = {
    getfilmsUrl  
}

//exporto el modulo que utilizare en routes
module.exports = films;