const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

console.log("hola desde node!");

const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabé de escribir el archivo");

//Se imprime a los 7 segundos el mensaje
setTimeout(()=> {
    console.log("Ya te hackie, jojojo");
}, 7000);

//El siguiente codigo de manera asincrona el arreglo ordenado
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
}

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

const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    console.log(request.method);

    if(request.url == "/"){

        response.setHeader('Content-Type', 'text/html');
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
        response.write(html);
        response.end();

    }

    else if(request.url == "/new" && request.method == "GET"){
        response.write(`
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



        `);

        response.end();
    }

    else if(request.url == "/new" && request.method == "POST"){

        const datos = [];
        request.on('data', (dato)=>{
            //console.log(dato);
            datos.push(dato);
        });

        response.write('La marca que registraste es GENIAL');
        response.end();
        
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const primera_variable = datos_completos.split('&')[0];
            console.log(primera_variable);
            const primer_valor = primera_variable.split('=')[1];
            console.log(primer_valor);
            const descripcion = datos_completos.split('&')[1].split('=')[1];
            response.write('La marca si se registrooo');
            marcas.push({
                nombre: primer_valor,
                imagen: "https://c8.alamy.com/compes/2gcmjkc/vinnytsia-ucrania-6-de-agosto-de-2021-conjunto-de-logotipos-de-la-marca-de-motocicletas-yamaha-honda-ducati-kawasaki-triumph-bmw-harley-davidson-suzuki-aprilia-ktm-ed-2gcmjkc.jpg",
                descripcion: descripcion
            });
            return response.end();
        });

    }

    else{
        response.statusCode = 404;

        response.write(`
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
    <section class="section">
    <div class="container">
        <h1 class="title">Tu moto no se encontró, SRRY</h1>
    </div>
</section>
</main>
</body>
</html>
        `)
    }

});

server.listen(3000);
