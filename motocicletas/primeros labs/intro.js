/*
console.log("holaaa")

const precio = 50;
console.log(precio)


function vamonos() {
    console.log("¡Vámonos, ya se acabó la clase!");
}

vamonos();
*/

const precio = 55;

// Alcance de las variables

if(precio > 50) {
    var respuesta = "Muy caro";
} else {
    var respuesta = "Buen precio";
}

//respuesta sigue existiendo porque var tiene alcance de función
console.log(respuesta);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}




document.getElementById("Nombre").onkeyup = () => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    document.getElementById("Nombre").style.color = `rgb(${red}, ${green}, ${blue})`;
}


const marcas = [
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

function genera_poster(){
    let html = `<div class="columns">`;
    for(let marca of marcas){
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
                                    ${marca.sinopsis}
                                </div>
                            </div>
            </div>`;
    }
    html += `</div>`;
    document.getElementById("poster").innerHTML = html;
}

genera_poster();