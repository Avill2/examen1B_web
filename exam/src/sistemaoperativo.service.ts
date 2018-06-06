import {Injectable} from '@nestjs/common';
import {Aplicaciones} from './aplicaciones.services';

@Injectable()
export class SistemaoperativoService {
    sistemas_operativos: SistemasOperativos[] = [];

    crearSO(sistemas_operativos: SistemasOperativos): SistemasOperativos {
        this.sistemas_operativos.push(sistemas_operativos);
        return sistemas_operativos;
    }

    mostrarSO(): SistemasOperativos[] {
        return this.sistemas_operativos;
    }
    actualizar_SO(SO:SistemasOperativos): SistemasOperativos{
        this.sistemas_operativos.pop();
        this.sistemas_operativos.push(SO);
        return SO;
    }
    obtenerUno(id){
        return this.sistemas_operativos[id -1]
    }

    editarUno(id,nombre, versionApi, fechaLanzamiento, pesoEnGigas, instalado ){
        let arregloauxSO = this.obtenerUno(id);
        arregloauxSO.nombre=nombre;
        arregloauxSO.versionApi=versionApi;
        arregloauxSO.fechaLanzamiento=fechaLanzamiento;
        arregloauxSO.pesoEnGigas=pesoEnGigas;
        arregloauxSO.instalado=instalado;
        return arregloauxSO;
    }
}
export interface SistemasOperativos {
    nombre: string,
    versionApi: number,
    fechaLanzamiento: Date,
    pesoEnGigas: number,
    instalado: boolean,
}

