const motocicletas = require('../models/moto.model');
const modelo = require('../models/moto.model');

exports.get_add = (request, response, next) => {
    response.render('motocicletas/add.ejs')
};

exports.post_add = (request, response, next) => {
    console.log(request.body);

    const motocicletas = new motocicletas({
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