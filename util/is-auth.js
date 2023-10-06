module.exports = (request, response, next) => {
    if(!request.session.isLoggedIn){
        console.log('user not logged in')
        return response.redirect('/users/login');
    }
    next();
}