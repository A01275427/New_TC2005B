exports.get_login = (request, response, next) => {
    response.render('users/login.ejs', {
        username: '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

exports.post_login = (request, response, next) => {
    request.session.username = request.body.username;
    request.session.isLoggedIn = true;
    response.redirect('/motos');
};

exports.get_logout = (request, repsonse, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login');
    });
}