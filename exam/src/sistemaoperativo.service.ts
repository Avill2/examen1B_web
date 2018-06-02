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
}
export interface SistemasOperativos {
    nombre: string,
    versionApi: number,
    fechaLanzamiento: Date,
    pesoEnGigas: number,
    instalado: boolean,
}

