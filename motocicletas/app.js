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


const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    console.log(request.method);
    if(request.url == "/"){

        response.setHeader('Content-Type', 'text/html');
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
                    <h2 class="title is-4">Informacion General</h2>
                    <ul class="buttons">
                        <li><button class="button is-transparent">Torneos</button></li>
                        <li><button class="button is-transparent">Categoria</button></li>
                        <li><button class="button is-transparent">Reglas</button></li>
                        <li><button class="button is-transparent">Equipo</button></li>
                    </ul>
                    </div>
                    <br>
                    <br>
                    <br>
                    <button id="marcas_motos" class="button is-danger is-rounded">Marcas famosas</button>
                    <div id="poster"></div>
                </div>
            </section>
        
            <div> 
                <button id="boton_info_pilotos" class="button is-info is-rounded">Información de pilotos</button>
                <button id="boton_prox_eventos" class="button is-info is-rounded">Próximos eventos</button>
                <button id="boton_imagen" class="button is-info is-rounded">Info Eventos</button>
                <div id="equipo"></div>
            </div>
    
    
            <section id="cajaNombre">
            <div>
                <form class="box", style="background-color: transparent">
                <div class="field">
                    <label for="Nombre", style="color:white">Nombre</label>
                    <input id="Nombre" class="input" type="text" placeholder="Usuario-123">
                    </div>
                </div>
            </div>
            </section>
            <section class="section">
                <div class="container">
                    <h3 class="title is-5">Datos de Altleta</h3>
                    <table class="table", style="background-color: transparent">
                        <caption></caption>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Fecha Nacimiento</th>
                                <th>Edad</th>
                                <th>Categoria</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Arturo Sánchez Rodríguez</td>
                                <td>27/08/2002</td>
                                <td>21</td>
                                <td>Sub-21</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br>
                    <div class="container">
                        <h5 id="title">
                            
                        </h5>
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
                <input id="nombre" name="nombre" class="input" type="text" placeholder="Escribe aqui">
                <br><br>
                <label for="descripcion">Descripcion de tu moto</label>
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
            console.log(dato);
            //datos.push(dato);
        });

        response.write('La marca que registraste es GENIAL');
        response.end();
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

    /*
    

    return request.on('end', () => {
        const datos_completos = Buffer.concat(datos).toString();
        console.log(datos_completos);
        const nuevo_dato = datos_completos.split('=')[1];
        return response.end();
    });
    */

});

server.listen(3000);
