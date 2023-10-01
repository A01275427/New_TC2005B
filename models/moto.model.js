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
    },
    {
        nombre: "KTM",
        imagen: "https://s7g10.scene7.com/is/image/ktm/450sxf",
        descripcion: "KTM es un fabricante austriaco conocido comúnmente por su grandiosa fabricación de motocicletas todoterreno, aunque la marca siempre va más allá y construye motos de calle así como motocicletas que siempre están presentes en el mundo de las competencias"
    },
    {
        nombre: "Ducati", 
        imagen: "https://media.ducati.com/images/previews/dsx/dsx/dsx-dsx-ngws-23-preview.png",
        descripcion: "Ducati es un sueño nacido en Bolonia en 1926 y mostrado en el Museo Ducati. Un lugar en el que explorar las hazañas de motos y pilotos legendarios, donde respirar una pasión sincera por prestaciones y excelencia; para abrir nuevos caminos, correr como un rayo y escribir la historia."
    }
];

module.exports = class motos{
    constructor(nueva_moto){
        this.nombre = nueva_moto.nombre || "Ducati";
        this.imagen = nueva_moto.imagen || "https://1000marcas.net/wp-content/uploads/2019/12/Ducati-emblema.jpg";
        this.descripcion = nueva_moto.descripcion || "Moto italiana, elegante y duradera";
    }
    save(){
        motos.push(this);
    }
    static fetchAll(){
        return db.execute('SELECT * FROM motocicletas')
            .then(([rows, fieldData]) => {
                console.log(rows);
                console.log(fieldData);
            })
            .catch((error) => {
                console.log(error);
            }
        );
    }
}