/*La clave (key) es el identificador y el valor (value) es el valor que queremos guardar 
en esa clave. La sintaxis es "clave: valor". Los objetos pueden contener muchos pares de 
clave-valor, deben estar separados por una coma (importante: sin punto y coma dentro de 
un objeto).  */

var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };

 var persona = { 
    nombre: 'Lucas', 
    edad: 26, 
    estudios: { esProgramador: true }
};

// ACCEDER
var persona = { nombre: 'Lucas',
 edad: 26, 
 estudios: { esProgramador: true } 
};

// ASIGNAR
var persona = { nombre: 'Lucas',
 edad: 26,
  estudios: { esProgramador: true } 
};
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

/*importante recordar que para definir un objeto en una funcion donde pasas el nombre 
por parametros usar el BRACKET NOTATION y sin las comillas solo con la variable que pasas
por parametros*/

// HAS OWN PROPERTY
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);
for (let prop in mundo) {
   console.log('Esta es la propiedad: ', prop);
   console.log('Este es el valor: ', mundo[prop]);
}

//THIS
var mascota = {
   animal: 'Perro',
   raza: 'Ovejero Alemán',
   amistoso: true,
   dueño: 'María López',
   info: () => {
      console.log('Mi perro es un  ' + this.raza);
   },
};