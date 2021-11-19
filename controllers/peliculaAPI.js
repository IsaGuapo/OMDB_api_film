//Funcion que pinta nuestros datos
const home = (req,res) =>{
    res.render("home")
}

//creo una funcion para traerme los datos del formulario home.pug
const createPelicula = (req,res) => {
    const dataPeli ={
        "Titulo": req.body.title,
        "Director": req.body.director,
        "Año": req.body.year,
        "Mensaje": `Se ha guardado ${req.body.title} correctamente`,
    }
    return res.status(200).json(dataPeli) //devuelven los datos del json
}


const pelicreada ={
    home,
    createPelicula
}

module.exports = pelicreada;