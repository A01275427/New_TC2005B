const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    //Constructor de la clase. sirve para crear un nuevo objeto, y en el se definen las propiedades del modelo
    constructor(nuevo_usuario){
        this.nombre = nuevo_usuario.nombre || "KTM";
        this.username = nuevo_usuario.username || "username";
        this.password = nuevo_usuario.password || "contraseña12345";
    }

    //Este metodo servira para guardar de manera persistente el nuevo objeto
    save(){
        return bcrypt.hash(this.password, 12)
            .then((password_cifrado) => {
                return db.execute(
                    'INSERT INTO usuarios(username, password, nombre) VALUES (?, ?, ?)',
                    [this.username, password_cifrado, this.nombre]);
            }).catch((error) => {console.log(error)});
    }

    static fetchOne(username){
        return db.execute('SELECT * FROM usuarios WHERE username = ?',
        [username]);
    }
    static getPrivilegios(id_usuarios){
        return db.execute(
            `SELECT p.nombre
            FROM usuarios u, usuarios_rol ur, roles r, rol_privilegios rp,
                privilegios p
            WHERE u.id = ? AND u.id = ur.id_usuario AND ur.id_rol = r.id
                AND rp.id_rol = r.id AND rp.id_privilegios = p.id`,
            [id_usuario]);
    }
}