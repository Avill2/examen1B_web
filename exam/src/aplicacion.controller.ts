import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {AplicacionesServices} from './aplicaciones.services';
import {AplicacacionPipe} from './AplicacionPipe/aplicacacion.pipe';
import {APLICACION_SCHEMA} from './Aplicacion/aplicacion.schema';
import {PeticionErroneaException} from './excepciones/peticion-erronea.exception';
import {error} from 'util';

@Controller('Aplicacion')
export class AplicacionController {
    aplicacion ={
      pesoEnGigas:Number,
      version:Number,
      nombre:String,
      urlDescarga:String,
      fechaLanzamiento:String,
      costo:Number,
      sistemaOperativoId:String,
    };

    aplicacions=[];

    constructor (private _aplicacionesservices: AplicacionesServices){
    }
    @Get()mostrarAplicacion(@Res() response){
            const app = this._aplicacionesservices.mostrar_app();
            return response.send(app);
        }

        @UsePipes(new AplicacacionPipe(APLICACION_SCHEMA))
    @Post('crearApp') crearAPP(@Body(new AplicacacionPipe(APLICACION_SCHEMA))
    nuevoapp){
        const appNuevo =this._aplicacionesservices.crear_app(nuevoapp);
        return nuevoapp;
    }

    @Get(':id')
    obtenerUno(@Param() id, @Req() request,
               @Res() response) {
        const app = this._aplicacionesservices.otbtenerUno(id);
        if (app) {
            return response.send(app);
        }else{
            throw  new PeticionErroneaException(
                'Id No encontrado',
                error()
            )
        }
    }


    @Put(':id')
    editarUno(@Param()id, @Body() updateApp, @Req() request,
              @Res() response) {
        const updateAplica =this._aplicacionesservices.editarUno(id.id, updateApp.pesoEnGigas, updateApp.version, updateApp.nombre, updateApp.urlDescarga, updateApp.fechaLanzamiento, updateApp.costo);
        if (updateApp){
            return updateApp;
        }else{
            throw new PeticionErroneaException(
                'Id no encontrado', error()
            )
        }

    }

}