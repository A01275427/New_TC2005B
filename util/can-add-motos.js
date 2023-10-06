module.exports = (request, response, next) => {
    let has_privilege = false;
    for(let permiso of request.session.privilegios){
        if(permiso.nombre == 'motos_agregar'){
            has_privilege = true;
        }
    }
    if(!has_privilege){
        console.log('user no authorized to add motos')
        return response.redirect('/users/login');
    }
    next();
}