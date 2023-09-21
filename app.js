const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

let marcas = [
    {
        nombre: "KTM",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/KTM-Logo.svg/1280px-KTM-Logo.svg.png",
        descripcion: "KTM Sportmotorcycle AG es un fabricante de motocicletas y escudería de motocicletas de Austria, que se formó en 1992, pero remonta su fundación a 1934. En 1992 la empresa fue escindida de su matriz KTM cuando tuvo problemas financieros."
    },
    {
        nombre: "Husqvarna",
        imagen: "https://1000marcas.net/wp-content/uploads/2021/03/Husqvarna-Logo.png",
        descripcion: "Husqvarna Motorcycles GmbH, es un fabricante de motocicletas de motocross, enduro y supermoto perteneciente desde comienzos de 2013 a KTM AG, propietaria de las marcas KTM Group ."
    },
    {
        nombre: "Honda",
        imagen: "https://1000marcas.net/wp-content/uploads/2021/03/Honda-Logo.jpg",
        descripcion: "Honda es un fabricante japonés especializado en el sector de la automoción y las motocicletas que inicio su actividad en el año 1946. Además de en estos sectores tienen una gran experiencia en la robótica, náutica, aeronáutica y en componentes destinados a la industria del automóvil."
    },
    {
        nombre: "Suzuki",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Suzuki_Motor_Corporation_logo.svg/2560px-Suzuki_Motor_Corporation_logo.svg.png",
        descripcion: "Suzuki es una firma japonesa especializada en la producción de vehículos, motocicletas, motores para el sector náutico y otros muchos productos motorizados."
    }
];


//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next();
});


app.get('/new', (request, response, next) => {
    const html = `
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laboratorio</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    <link rel="stylesheet" href="motos.css">
</head>
<body>
    <header>
        <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <figure class="image is 20x20">
                        <img src="https://w7.pngwing.com/pngs/864/664/png-transparent-fox-logo-fox-racing-logo-desktop-blue-motocross-blue-angle-white-thumbnail.png" alt="Motocross" width="95" height="200">
                    </figure>
                </a>
                <section class="section">
                    <div class="container">
                        <h1 class="title is-5" style="color:white"> El Camino Motocicletas</h1>
                    </div>
                </section>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
                </div>
                <div class="tile"> 
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item">
                    Inicio
                    </a>
            
                    <a class="navbar-item">
                    Historia
                    </a>
            
                    <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Mas
                    </a>
            
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                        Equipo
                        </a>
                        <a class="navbar-item">
                        Ropa
                        </a>
                        <a class="navbar-item">
                        Herramientas
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                        Soporte
                        </a>
            </div>
        </nav>
    </header>
    <main>
        <div class="section">
            <div class="container">
                <h2 class="title is-4">Registra tu Marca favorita</h2>


                <form action="/new" method="POST">
    <label for="nombre">Nombre de la marca</label>
    <input id="nombre" name="nombre" class="input" type="text" placeholder="Escribe aquí">
    <br><br>
    <label for="descripcion">Descripción de tu moto</label>
    <textarea id="descripcion" name="descripcion" class="textarea" placeholder="Una excelente fabricadora de motos"></textarea>
    <br>
    <input id="registrar" name="registrar" type="submit" value="Registrar" class="button is-info">
</form>



                </div>
                <br>
                <br>
                <br>
                <button id="marcas_motos" class="button is-danger is-rounded">Marcas famosas</button>
                <div id="poster"></div>
            </div>
        </section>


    </main>
    <footer class="section">
        <div class="container">
            <h4 class="title is-5">Referencias</h4>
            <button id="inicio"></button>
        </div>
    </footer>
    <script src="intro.js" class="is-rounded-2">Back</script>
</body>
</html>
    `;
    response.send(html);

});

app.post('/new', (request, response, next) => {
    console.log(request.body);

    marcas.push({
        nombre: request.body.nombre,
        imagen: "https://img.freepik.com/vector-gratis/diseno-logotipo-motorista-coche-dibujado-mano_23-2149936367.jpg?w=2000",
        descripcion: request.body.descripcion,
    });

    response.redirect('/');
});

app.get("/", (request, response, next) => {
    let html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laboratorio</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="motos.css">
    </head>
    <body>
        <header>
            <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                        <figure class="image is 20x20">
                            <img src="https://w7.pngwing.com/pngs/864/664/png-transparent-fox-logo-fox-racing-logo-desktop-blue-motocross-blue-angle-white-thumbnail.png" alt="Motocross" width="95" height="200">
                        </figure>
                    </a>
                    <section class="section">
                        <div class="container">
                            <h1 class="title is-5" style="color:white"> El Camino Motocicletas</h1>
                        </div>
                    </section>
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                    </div>
                    <div class="tile"> 
                    </div>
    
                    <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">
                        Inicio
                        </a>
                
                        <a class="navbar-item">
                        Historia
                        </a>
                
                        <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            Mas
                        </a>
                
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                            Equipo
                            </a>
                            <a class="navbar-item">
                            Ropa
                            </a>
                            <a class="navbar-item">
                            Herramientas
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">
                            Soporte
                            </a>
                </div>
            </nav>
        </header>
        <main>
            <div class="section">
                <div class="container">
                    <h2 class="title is-4">Informacion General</h2>
                    <div class="columns">`;
                    for(let marca of marcas) {
                        html += 
                            `<div class="column">
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                            <img src="${marca.imagen}" alt="${marca.nombre}">
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                            <figure class="image is-48x48">
                                                <img src="${marca.imagen}" alt="${marca.nombre}">
                                            </figure>
                                            </div>
                                            <div class="media-content">
                                            <p class="title is-4">${marca.nombre}</p>
                                            </div>
                                        </div>
                                    
                                        <div class="content">
                                            ${marca.descripcion}
                                            <br>
                                            <button class="button is-danger is-rounded" onclick=quitar("${marca.nombre}")>Quitar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
                    }
                    
    html += `       </div>
        </main>
        <footer class="section">
            <div class="container">
                <h4 class="title is-5">Referencias</h4>
                <button id="inicio"></button>
            </div>
        </footer>
        <script src="intro.js" class="is-rounded-2">Back</script>
    </body>
    </html>
    `;

    response.send(html);
})

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.statusCode = 404;
    response.send('NO SE PUEDE KRNAL');
});

app.listen(3000);