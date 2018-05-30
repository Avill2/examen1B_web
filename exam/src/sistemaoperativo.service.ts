import {Injectable} from '@nestjs/common';

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
}
export interface SistemasOperativos {
    nombre: string,
    versionApi: number,
    fechaLanzamiento: Date,
    pesoEnGigas: number,
    instalado: boolean,
}