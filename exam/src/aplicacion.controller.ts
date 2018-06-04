import {Body, Controller, Get, HttpCode, Param, Post, Put, Req, Res, UsePipes} from '@nestjs/common';
import {AplicacionesServices} from './aplicaciones.services';
import {AplicacacionPipe} from './AplicacionPipe/aplicacacion.pipe';
import {APLICACION_SCHEMA} from './Aplicacion/aplicacion.schema';

@Controller()
export class AplicacionController {
    aplicacion ={
      pesoEnGigas:Number,
      version:Number,
      nombre:String,
      urlDescarga:String,
      fechaLanzamiento:Date(),
      costo:Number,
      sistemaOperativoId:String,
    };

    aplicacions=[];

    constructor (private _aplicacionesservices: AplicacionesServices){
    }
    @Get("Aplicacion")mostrarAplicacion(@Res() response){
            const app = this._aplicacionesservices.mostrar_app();
            return response.send(app);
        }

        @UsePipes(new AplicacacionPipe(APLICACION_SCHEMA))
    @Post('crearApp') crearAPP(@Body(new AplicacacionPipe(APLICACION_SCHEMA))
    nuevoapp){
        const appNuevo =this._aplicacionesservices.crear_app(nuevoapp);
        return nuevoapp;
    }

    @Get(':sistemaOperativoId')
    obtenerUno(@Param(APLICACION_SCHEMA.nombre) nombreApp, @Req() request,
               @Res() response) {
        const app = this._aplicacionesservices.mostrar_app();
        return response.send(app);

    }

    @Put(':sistemaOperativoId')
    editarUno(@Param(APLICACION_SCHEMA.nombre) nombre, @Body(new AplicacacionPipe(APLICACION_SCHEMA)) updateApp, @Req() request,
              @Res() response) {
        const updateAplica =this._aplicacionesservices.actualizar_app(updateApp);
        return updateApp;
    }

}