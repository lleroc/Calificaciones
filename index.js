
var ClaseAlumno = require('./Alumnos/Alumno')
var alumno = new ClaseAlumno('1234','Juan','Perez')
var alumno2 = new ClaseAlumno('5678', 'Maria', 'Gomez')
var alumno3 = new ClaseAlumno('9012', 'Pedro', 'Rodriguez')
var alumno4 = new ClaseAlumno('3456', 'Ana', 'Martinez')
var alumno5 = new ClaseAlumno('7890', 'Luis', 'Suarez')
var ClaseListaAlumnos = require('./Alumnos/listaAlumnos')
var listaAlumnos = new ClaseListaAlumnos()
listaAlumnos.agregarAlumno(alumno)
listaAlumnos.agregarAlumno(alumno2)
listaAlumnos.agregarAlumno(alumno3)
listaAlumnos.agregarAlumno(alumno4)
listaAlumnos.agregarAlumno(alumno5)

var ClaseAsignatura = require('./Asignaturas/asignatura')
var asignatura=new ClaseAsignatura('0001','Matematicas',10,5,5,7,7)
var asignatura2=new ClaseAsignatura('0002','Corte y Confeccion',10,9,8,9,10)
var asignatura3=new ClaseAsignatura('0003','Chefs',10,10,9,8,9)
var asignatura4=new ClaseAsignatura('0004','Estetica Integral',10,10,9,9,10)
var asignatura5=new ClaseAsignatura('0005','Mecanica Dental',10,10,8,9,10)

var ClaseListaAsignaturas = require('./Asignaturas/listaAsignaturas')
var listaAsignaturas = new ClaseListaAsignaturas();
listaAsignaturas.agregarAsignatura(asignatura)
listaAsignaturas.agregarAsignatura(asignatura2)
listaAsignaturas.agregarAsignatura(asignatura3)
listaAsignaturas.agregarAsignatura(asignatura4)
listaAsignaturas.agregarAsignatura(asignatura5)

var Calificaciones = require('./calificaciones')
var calificaciones = new Calificaciones()
calificaciones.agragarCalifacion(alumno, asignatura)
calificaciones.agragarCalifacion(alumno2, asignatura2)
calificaciones.agragarCalifacion(alumno3, asignatura3)
calificaciones.agragarCalifacion(alumno4, asignatura4)
calificaciones.agragarCalifacion(alumno5, asignatura5)

//console.log(calificaciones.ListarCalificaciones())

//console.log(calificaciones.buscarxCedula('1234'))
console.log(calificaciones.buscarxAsignatura('Estetica Integral'))

