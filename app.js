

const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use( express.static( 'public' ) );

// render view /
app.get('/', (req, res) => {
    res.render('home', {

        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'

    });
})

// render view /generic
app.get('/generic', (req, res) => {
    res.render('generic', {

        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'

    });
})

// render view /elements
app.get('/elements', (req, res) => {
    res.render('elements', {

        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'

    });
})

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html');
// })

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html');
// })

app.listen( port, () => { 

    console.log(`Example app listering at http://localhost: ${ port }`);

 })

 // app.get('/hola-mundo', (req, res) => {
//     res.send('Hola mundo en su respectiva ruta');
// })

// app.listen(8080)