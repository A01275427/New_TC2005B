const motocicletas = require('../models/moto.model');

exports.get_add = (request, response, next) => {
    response.render('motocicletas/add.ejs', {
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    })
};


exports.post_add = (request, response, next) => {
    console.log(request.body);

    const newMoto = new motocicletas({
        nombre: request.body.nombre,
        imagen: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/ed67ae20658687.562eefc31f60a.jpg",
        descripcion: request.body.descripcion,
    });

    newMoto.save()
        .then(() => {
            return response.redirect('/motos');
        })
        .catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });
}

exports.get_list = (request, response, next) => {
    const ultimo_acceso = new Date(request.get('cookie').split('=')[1]);
    console.log(ultimo_acceso.getTime());
    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;
    console.log(tiempo_transcurrido);
    
    motocicletas.fetch(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            console.log(fieldData);

            return response.render('motocicletas/list.ejs', {
                marcas: rows,
                tiempo_transcurrido: tiempo_transcurrido,
                username: request.session.username || '',
                isLoggedIn: request.session.isLoggedIn || false,
            });
        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });

};