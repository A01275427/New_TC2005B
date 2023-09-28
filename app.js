const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


//Middleware
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    //Acceder a la información de la cookie
    const cookie = request.get('Cookie');
    //Toda la informacion de las cookies
    console.log(cookie);
    if(cookie){
         //Valor de la primera cookie
        console.log(cookie.split('=')[1]);
    }
    else{
        console.log('No hay cookie');
    }
    //Crear una nueva cookie
    response.setHeader('Set-Cookie', 'ultimo_acceso=' + new Date() + '; HttpOnly SameSite=None; Secure');
    next();
});


const rutasMotos = require('./routes/moto.routes');
app.use('/motos', rutasMotos);

app.use((request, response, next) => {
    response.status(404).send("NO SE PUEDE KRNAL")
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

