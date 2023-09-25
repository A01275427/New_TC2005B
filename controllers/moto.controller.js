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
    },
];

exports.get_add = (request, response, next) => {
    response.render('motocicletas/add.ejs')
};

exports.post_add = (request, response, next) => {
    console.log(request.body);

    marcas.push({
        nombre: request.body.nombre,
        imagen: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ed67ae20658687.562eefc31f60a.jpg",
        descripcion: request.body.descripcion,
    });
    response.redirect('/motocicletas')
}

exports.get_list = (request, response, next) => {
    response.render('motocicletas/list.ejs', { 
        motocicletas: motocicletas
    });
};