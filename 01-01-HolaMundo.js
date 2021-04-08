var nombre = "Leonardo";
console.log("Hola mundo, de ", nombre);
hola = ["hola", "mundo"];
console.log(hola);
persona = {
  nombre: "Juan",
  apellido: "Alcachofa",
  direccion: "renan",
  idioma: "es",
  get lang() {
    return this.idioma.toUpperCase();
  },
  set lang(lang) {
    this.idioma = lang.toUpperCase();
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

let personaArray = Object.values(persona);
console.log(personaArray);

let personaString = JSON.stringify(persona);
console.log(personaString);
console.log(typeof persona);
console.log(persona.nombreCompleto);
persona.lang = "en";
console.log(persona.lang);

function Persona(nombre, apellido, email) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.email = email;
}

Persona.prototype.nada = "jas";

let padre = new Persona("Juan", "Perez", "pate@gmail.com");
console.log(padre);
console.log(padre.nada);
let madre = new Persona("Laura", "Paca", "email@gina.com");
console.log(madre);
