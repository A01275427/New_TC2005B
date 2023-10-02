const db = require('../util/database');

module.exports = class Usuario {
    //Constructor de la clase. sirve para crear un nuevo objeto, y en el se definen las propiedades del modelo
    constructor(nuevo_usuario){
        this.nombre = nuevo_usuario.nombre || "KTM";
        this.username = nuevo_usuario.username || "username";
        this.password = nuevo_usuario.password || "contraseña12345";
    }

    //Este metodo servira para guardar de manera persistente el nuevo objeto
    save(){
        return db.execute(
            'INSERT INTO usuarios(username, password, nombre) VALUES (?, ?, ?)',
            [this.username, this.password, this.nombre]);
    }
}