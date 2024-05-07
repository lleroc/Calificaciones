
class ClaseListaAsignaturas {
    constructor(){
        this.listaAsignaturas = [];
    }
    agregarAsignatura(asignatura){
        this.listaAsignaturas.push(asignatura)
    }
    ListaAsignaturas(){
        return this.listaAsignaturas
    }
}
module.exports = ClaseListaAsignaturas