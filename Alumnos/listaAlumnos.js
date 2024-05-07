class ClaseListaAlumnos {
  constructor() {
    this.listaAlumnos = [];
  }
  agregarAlumno(alumno) {
    this.listaAlumnos.push(alumno);
  }
  obtenerAlumnos() {
    return this.listaAlumnos;
  }
  obtenerAlumno(cedula) {
    /* var ClaseAlumno = require('./Alumno');
        for(let i = 0; i < this.listaAlumnos.length; i++){
           var alumno = new ClaseAlumno(this.listaAlumnos[i])
           if(alumno.cedula === cedula){
               return alumno;
           }
        }
*/
    return this.listaAlumnos.find((alumno) => alumno.cedula === cedula);
  }
}
module.exports = ClaseListaAlumnos;
