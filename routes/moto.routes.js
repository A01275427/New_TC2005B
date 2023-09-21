const express = require('express');

const router = express.Router();

const path = require('path');


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


router.get('/new', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'new.html'));
});

router.post('/new', (request, response, next) => {
    console.log(request.body);

    marcas.push({
        nombre: request.body.nombre,
        imagen: "https://img.freepik.com/vector-gratis/diseno-logotipo-motorista-coche-dibujado-mano_23-2149936367.jpg?w=2000",
        descripcion: request.body.descripcion,
    });

    response.redirect('/motocicletas');
});

router.get("/", (request, response, next) => {
    response.render('motociletas/list.ejs',{
        motos: motos
    });
});

module.exports = router;