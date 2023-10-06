module.exports = (request, response, next) => {
    let has_privilege = false;
    for(let permiso of request.session.privilegios){
        if(permiso.nombre == 'motos_ver'){
            has_privilege = true;
        }
    }
    if(!has_privilege){
        console.log('user not authorized to ver motos')
        return response.redirect('/users/login');
    }
    next();
}