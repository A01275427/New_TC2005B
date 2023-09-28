const motocicletas = require('../models/moto.model');
const modelo = require('../models/moto.model');

exports.get_add = (request, response, next) => {
    response.render('motocicletas/add.ejs')
    
    const allMotos = motocicletas.fetchAll();
    response.render('motocicletas/list.ejs', { motocicletas: allMotos });
};



exports.post_add = (request, response, next) => {
    console.log(request.body);

    const newMoto = new motocicletas({
        nombre: request.body.nombre,
        imagen: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ed67ae20658687.562eefc31f60a.jpg",
        descripcion: request.body.descripcion,
    });

    newMoto.save();

    response.redirect('/motos/motocicletas')
}

exports.get_list = (request, response, next) => {
    const ultimo_acceso = new Date(request.get('cookie').split('=')[]);
    console.log(ultimo_acceso.getTime());
    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;
    console.log(tiempo_transcurrido);
    response.render('motocicletas/list.ejs', { 
        marcas: motocicletas.fetchAll(),
        tiempo_transcurrido: tiempo_transcurrido
    });
};

exports.get_list = (request, response, next) => {
    const allMotos = motocicletas.fetchAll();
    response.render('motocicletas/list.ejs', { marcas: allMotos });
};
