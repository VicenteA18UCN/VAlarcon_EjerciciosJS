//Ejercicio 11

function Persona(nombre, edad, genero) {
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
}

Persona.prototype.obtDetalles = function () {
  console.log(this);
};

function Estudiante(nombre, edad, genero, curso, grupo) {
  Persona.call(this, nombre, edad, genero);
  this.curso = curso;
  this.grupo = grupo;
}

Estudiante.prototype = Object.create(Persona.prototype);
Estudiante.prototype.constructor = Estudiante;

Estudiante.prototype.registrar = function () {
  console.log(this);
};

function Profesor(nombre, edad, genero, asignatura, nivel) {
  Persona.call(this, nombre, edad, genero);
  this.asignatura = asignatura;
  this.nivel = nivel;
}

Profesor.prototype = Object.create(Persona.prototype);
Profesor.prototype.constructor = Profesor;

Profesor.prototype.asignar = function () {
  console.log(this);
};

var persona1 = new Persona("Juan", 25, "Masculino");
var estudiante1 = new Estudiante("Pedro", 20, "Masculino", "1", "A");
var profesor1 = new Profesor("Ana", 30, "Femenino", "Matemáticas", "1");

persona1.obtDetalles();
estudiante1.obtDetalles();
estudiante1.registrar();
profesor1.obtDetalles();
profesor1.asignar();
