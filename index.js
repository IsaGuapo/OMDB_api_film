
const express = require('express')
const bodyParser = require('body-parser');


const app = express()
const port = 3000


app.set('view engine', 'pug');
app.set('views','./views');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


//Llamada a la ruta pelicula.js
//app.use("/",productRouter)// rutas Web


//llamada a la ruta peliculaApi.js
//app.use("/api",productApiRouter) //rutas API




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    })