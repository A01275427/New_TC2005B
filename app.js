const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto debe ser un string aleatorio muy largo, no como éste',
    resave: false, //La sesion no se guardara en cada peticion, sino solo se guardará si algo cambió
    saveUninitialized: false, //Asegura que no se guarde una sesion para una petición que no lo necesita
}))


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection);

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
})

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Crear una nueva cookie
    response.setHeader('Set-Cookie', 'ultimo_acceso=' + new Date() + '; HttpOnly SameSite=None; Secure');
    next();
});


const rutasMotos = require('./routes/moto.routes');
app.use('/motos', rutasMotos);

const rutasUsuarios = require('./routes/user.routes');
app.use('/users', rutasUsuarios);

app.use((request, response, next) => {
    response.status(404).send("NO SE PUEDE KRNAL")
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

