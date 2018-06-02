import {Body, Controller, Get, HttpCode, Param, Post, Put, ReflectMetadata, Req, Res} from '@nestjs/common';
import {SistemaoperativoService} from './sistemaoperativo.service';
import {SistemaoperativoPipe} from './SIstemaOperativoPipe/sistemaoperativo.pipe';
import {SISTEMAOPERATIVO_SCHEMA} from './SistemaOperativo/sistemaoperativo.schema';
import {APLICACION_SCHEMA} from './Aplicacion/aplicacion.schema';
import {AplicacacionPipe} from './AplicacionPipe/aplicacacion.pipe';

@Controller()
export class SistemaoperativoController {
    sistema_operativo = {
        nombre: String,
        versionApi: Number,
        fechaLanzamiento: Date(),
        pesoEnGigas: Number,
        instalado: Boolean,
    };
    sistemas_operativos = [];

    constructor(private _sistemaoperativoservice: SistemaoperativoService) {

    }

    @HttpCode(202)
    @Get('SistemaOperativo')
    mostrarSO(
        @Res() response
    ) {
        const sistemas_operativos = this._sistemaoperativoservice.mostrarSO();
        return response.send(sistemas_operativos);
    }

   @Post('crearSO')
   // @ReflectMetadata('permisos', ['privado'])

    crearSO(
        @Body(new SistemaoperativoPipe(SISTEMAOPERATIVO_SCHEMA))
            nuevoSO
    ) {

        const SOCreado = this._sistemaoperativoservice.crearSO(nuevoSO);
        return nuevoSO;
   }
    @Get(':nombre')
    obtenerUno(@Param(SISTEMAOPERATIVO_SCHEMA.nombre) nombreApp, @Req() request,
               @Res() response) {
        const app = this._sistemaoperativoservice.mostrarSO();
        return response.send(app);

    }
    @Put(':nombre')
    editarUno(@Param(SISTEMAOPERATIVO_SCHEMA.nombre) nombre, @Body(new AplicacacionPipe(SISTEMAOPERATIVO_SCHEMA)) updateApp, @Req() request,
              @Res() response) {
        const updateAplica =this._sistemaoperativoservice.actualizar_SO(updateApp);
        return updateApp;
    }



}


