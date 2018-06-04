import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {APLICACION_SCHEMA} from './Aplicacion/aplicacion.schema';
import {AplicacacionPipe} from './AplicacionPipe/aplicacacion.pipe';
import {PeticionErroneaException} from './excepciones/peticion-erronea.exception';

@Controller('Autorizacion')
export class AutorizacionController{
    usuario ={
        usuario: 'AndreaVillacis',
        password: 1234563006,
    };

    @Post('iniciarSesion')iniciarSesion(@Req() request, @Res() response, @Body('usuario')usuario:string,@Body('password')password:number){
        const datos={
            nombrecookie:'token',
            valorcookie:this.usuario.usuario,
        };
        if (usuario==this.usuario.usuario && this.usuario.password){
            response.cookie(datos.nombrecookie,datos.valorcookie);
            return response.send({
                datos,mensaje:'ok'
            })
        }else
        {
            throw  new PeticionErroneaException(
                'No se puede iniciar sesion, los datos son invalidos',10
            )
        }

    }

    @Post('cerrarSesion')cerrarSesion(@Req () request, @Res() response){
        const  datos ={
            nombrecookie:'token',
            valorcookie:undefined,
        };
        const  existecookie = request.cookies[datos.nombrecookie];
        if (existecookie){
            response.cookie(datos.nombrecookie, datos.valorcookie)
            return response.send({
                mensaje:'Usted salio del sistema'
            })
        }else{
            return response.status(404).send({mensaje:'no se encontro ninguna cookie'})
        }
    }

}