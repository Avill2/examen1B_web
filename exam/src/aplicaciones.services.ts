import {Injectable} from '@nestjs/common';
import {AplicacionController} from './aplicacion.controller';

@Injectable()
export class AplicacionesServices{
    aplicacion : Aplicaciones [] = [];

    crear_app(App:Aplicaciones): Aplicaciones{
        this.aplicacion.push(App);
        return App;
    }

    mostrar_app():Aplicaciones []{
        return this.aplicacion;
    }
    actualizar_app(App:Aplicaciones): Aplicaciones{
        this.aplicacion.pop();
        this.aplicacion.push(App);
        return App;
    }

    otbtenerUno(id){
        return this.aplicacion[id-1];
    }

    editarUno(id,pesoEnGigas, version, nombre,urlDescarga,fechaLanzamiento,costo){
        let arregloaux= this.otbtenerUno(id);
        arregloaux.pesoEnGigas=pesoEnGigas;
        arregloaux.version=version;
        arregloaux.nombre=nombre;
        arregloaux.urlDescarga=urlDescarga;
        arregloaux.fechaLanzamiento=fechaLanzamiento;
        arregloaux.costo=costo;
        return arregloaux;
    };


}
export interface Aplicaciones {
    pesoEnGigas:number,
    version:number,
    nombre:string,
    urlDescarga:string,
    fechaLanzamiento:Date,
    costo:number,
    sistemaOperativoId:string,
}