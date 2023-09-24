const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'viewa');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});

const rutasMotos = require('./routes/moto.routes');

app.use('/moto', rutasMotos);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode = 404;
    response.send('NO SE PUEDE KRNAL');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

