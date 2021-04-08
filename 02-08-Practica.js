class Persona {
  static contadorPersonas = 0;

  constructor(nombre, apellido, edad) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorPersonas;
  }

  get idPersona() {
    return this._idPersona;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get apellido() {
    return this._apellido;
  }

  set apellido(apellido) {
    this._apellido = apellido;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  toString() {
    return `${this._idPersona}
            ${this._nombre} 
            ${this.apellido} 
            ${this._edad}`;
  }
}

class Empleado extends Persona {
  static contadorEmpleados = 0;
  constructor(nombre, apellido, edad, sueldo) {
    super(nombre, apellido, edad);
    this._sueldo = sueldo;
    this._idEmpleado = ++Empleado.contadorEmpleados;
  }

  get idEmpleado() {
    return this._idEmpleado;
  }

  get sueldo() {
    return this._sueldo;
  }

  set sueldo(sueldo) {
    this._sueldo = sueldo;
  }

  toString() {
    return `${super.toString()} 
            ${this._idEmpleado} 
            ${this._sueldo}`;
  }
}

class Cliente extends Persona {
  static contadorClientes = 0;
  constructor(nombre, apellido, edad, fechaRegistro = null) {
    super(nombre, apellido, edad);
    this._idCliente = ++Cliente.contadorClientes;
    this._fechaRegistro = fechaRegistro;
  }

  get idCliente() {
    return this._idClinte;
  }

  get fechaRegistro() {
    return this._fechaRegistro;
  }

  set fechaRegistro(fechaRegistro) {
    this._fechaRegistro = fechaRegistro;
  }

  toString() {
    return `${super.toString()} 
    ${this._idCliente} 
    ${this._fechaRegistro}`;
  }
}

// Prueba del Código
let anita = new Persona("anita", "tina", "24");
console.log(anita.toString());
let pepito = new Empleado("Pepito", "2cañones", " 12", 500);
console.log(pepito.toString());
let cebolla = new Cliente("frejolito", "ConCarne", "21", new Date());
console.log(cebolla.toString());

cebolla.fechaRegistro = new Date();
console.log(cebolla.toString());
