const db = require('../util/database');

let marcas = [
    {
        nombre: "Honda",
        imagen: "https://1000marcas.net/wp-content/uploads/2021/03/Honda-Logo.jpg",
        descripcion: "Honda es un fabricante japonés especializado en el sector de la automoción y las motocicletas que inicio su actividad en el año 1946. Además de en estos sectores tienen una gran experiencia en la robótica, náutica, aeronáutica y en componentes destinados a la industria del automóvil."
    },
    {
        nombre: "Suzuki",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Suzuki_Motor_Corporation_logo.svg/2560px-Suzuki_Motor_Corporation_logo.svg.png",
        descripcion: "Suzuki es una firma japonesa especializada en la producción de vehículos, motocicletas, motores para el sector náutico y otros muchos productos motorizados."
    }
];

module.exports = class motos{
    constructor(nueva_moto){
        this.nombre = nueva_moto.nombre || "Ducati";
        this.imagen = nueva_moto.imagen || "https://1000marcas.net/wp-content/uploads/2019/12/Ducati-emblema.jpg";
        this.descripcion = nueva_moto.descripcion || "Moto italiana, elegante y duradera";
    }
    save(){
        return db.execute(
            'INSERT INTO motocicletas(nombre, imagen, descripcion) VALUES(?,?,?)',
            [this.nombre, this.imagen, this.descripcion]);
    }
    static fetchAll(){
        return db.execute('SELECT * FROM motocicletas')
    }
}