exports.get_login = (request, response, next) => {
    response.render('users/login.ejs', {
        username: '',
    });
};

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    response.redirect('/motocicletas');
};

exports.get_logout = (request, repsonse, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
}