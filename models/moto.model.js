const db = require('../util/database');


module.exports = class motos{
    constructor(nueva_moto){
        this.nombre = nueva_moto.nombre || "Ducati";
        this.imagen = nueva_moto.imagen || "https://1000marcas.net/wp-content/uploads/2019/12/Ducati-emblema.jpg";
        this.descripcion = nueva_moto.descripcion || "Moto italiana, elegante y duradera";
    }
    save(){
        return db.execute(
            'INSERT INTO motocicletas(nombre, imagen, descripcion) VALUES (?, ?, ?)',
            [this.nombre, this.imagen, this.descripcion]);
    }
    static fetchAll(){
        return db.execute('SELECT * FROM motocicletas');
    }

    static fetch(id){
        if(id){
            return db.execute('SELECT * FROM motocicletas WHERE id = ?',
            [id]);
        }
        else{
            return this.fetchAll();
        }
    }

}