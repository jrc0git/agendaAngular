import { Sesion } from "./sesion";

export class Pacientes {
    id?:number;
    nombre:string;
    apellidos:string;
    edad:number;
    sesiones:Sesion[]=[];

    constructor(nombre:string,apellidos:string,edad:number){
        this.apellidos=apellidos;
        this.nombre=nombre;
        this.edad=edad;

    }
}
