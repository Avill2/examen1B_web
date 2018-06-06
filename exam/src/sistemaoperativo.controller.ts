import {Body, Controller, Get, HttpCode, Param, Post, Put, ReflectMetadata, Req, Res, UsePipes} from '@nestjs/common';
import {SistemaoperativoService} from './sistemaoperativo.service';
import {SistemaoperativoPipe} from './SIstemaOperativoPipe/sistemaoperativo.pipe';
import {SISTEMAOPERATIVO_SCHEMA} from './SistemaOperativo/sistemaoperativo.schema';
import {APLICACION_SCHEMA} from './Aplicacion/aplicacion.schema';
import {AplicacacionPipe} from './AplicacionPipe/aplicacacion.pipe';
import {PeticionErroneaException1} from './excepciones/peticion-erronea.exception1';
import {error} from 'util';

@Controller('SistemaOperativo')
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
    @Get('listaSO')
    mostrarSO(
        @Res() response
    ) {
        const sistemas_operativos = this._sistemaoperativoservice.mostrarSO();
        return response.send(sistemas_operativos);
    }
    @UsePipes(new SistemaoperativoPipe(SISTEMAOPERATIVO_SCHEMA))
    @Post('crearSO')
   // @ReflectMetadata('permisos', ['privado'])
    crearSO(
        @Body(new SistemaoperativoPipe(SISTEMAOPERATIVO_SCHEMA))
            nuevoSO
    ) {
        const SOCreado = this._sistemaoperativoservice.crearSO(nuevoSO);
        if(SOCreado){
            return nuevoSO;
        }
        else{
            throw new PeticionErroneaException1(
                'Peticion Invalidad, los datos ingresados no son suficientes',error()
            )
        }
   }
    @Get(':nombre')
    obtenerUno(@Param()id, @Req() request,@Res() response){
        const sisO = this._sistemaoperativoservice.obtenerUno(id.id);
        if (sisO){
            return response.send(sisO);
        }
        else{
            throw new PeticionErroneaException1('id no encontrado', error)
        }

    }

    @Put(':id')
    editarUno(@Param()id ,@Body() actualizaSO ,@Req() request,
              @Res() response) {
        const updateSisO =this._sistemaoperativoservice.editarUno(id.id, actualizaSO.nombre, actualizaSO.versionApi, actualizaSO.fechaLanzamiento,actualizaSO.pesoEnGigas,actualizaSO.instalado);
        if(updateSisO){
            return response.send(updateSisO);
        }else{
            throw new PeticionErroneaException1('No se encuentra el ID', error)
        }

    }

}


