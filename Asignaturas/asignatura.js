const Clase_Notas = require("../Notas/nota");

class ClaseAsignatura extends Clase_Notas {
    constructor(codigo, nombre, f1,p1,f2,p2,f){
        super(f1, p1, f2, p2, f);
        this.codigo = codigo;
        this.nombre = nombre;
    }
}
module.exports = ClaseAsignatura;