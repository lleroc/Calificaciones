class Calificaciones{
    constructor(){
        this.listaCalificaciones = []
    }
    agragarCalifacion(alumno, asignatura){
        this.listaCalificaciones.push([alumno,asignatura])
    }
  ListarCalificaciones(){
    return this.listaCalificaciones
  }
  buscarxCedula(cedula){
   return this.listaCalificaciones.find(calificacion => calificacion[0].cedula === cedula)
  }
  buscarxAsignatura(asignatura){
    return this.listaCalificaciones.find(calificacion => calificacion[1].nombre === asignatura)
   }
}
module.exports = Calificaciones