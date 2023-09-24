const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));




//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

const rutasMotos = require('./routes/moto.routes');

app.use('/motos', rutasMotos);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode = 404;
    response.send('NO SE PUEDE KRNAL');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

