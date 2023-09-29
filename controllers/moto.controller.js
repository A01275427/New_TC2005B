const motocicletas = require('../models/moto.model');
const model = require('../models/moto.model');

exports.get_add = (request, response, next) => {
    response.render('motocicletas/add.ejs', {
        username: request.session.username || '',
    })
    
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
    
    const ultimo_acceso = new Date(request.get('cookie').split('=')[1]);

    console.log(ultimo_acceso.getTime());

    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;

    console.log(tiempo_transcurrido);

    response.render('motocicletas/list.ejs', { 
        marcas: motocicletas.fetchAll(),
        tiempo_transcurrido: tiempo_transcurrido,
        username: request.session.username || '',
    });
};

/*
exports.get_list = (request, response, next) => {
    const allMotos = motocicletas.fetchAll();
    response.render('motocicletas/list.ejs', { marcas: allMotos });
};
*/

exports.get_list = (request, response, next) => {
    const cookie = request.get('Cookie');
    let ultimo_acceso;
    let tiempo_transcurrido;

    if (cookie && cookie.includes('ultimo_acceso')) {
        const fechaString = cookie.split('ultimo_acceso=')[1].split(';')[0];
        ultimo_acceso = new Date(fechaString);

        if (!isNaN(ultimo_acceso.getTime())) {
            tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;
            console.log(tiempo_transcurrido);
        } else {
            console.log('Fecha de último acceso no válida');
        }
    } else {
        console.log('No hay cookie de último acceso');
    }

    response.render('motocicletas/list.ejs', { 
        marcas: motocicletas.fetchAll(),
        tiempo_transcurrido: tiempo_transcurrido || 'Desconocido'
    });
};
