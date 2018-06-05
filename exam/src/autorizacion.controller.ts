import {Body, Controller, Post, Req, Res} from "@nestjs/common";
import {error} from "util";
import {PeticionErroneaException1} from './excepciones/peticion-erronea.exception1';
import {PeticionErroneaException} from './excepciones/peticion-erronea.exception';


@Controller('Autorizacion')
export class AutorizacionController{

    usuario = {
        usuario: 'andrea',
        password: '1722334487',
    };


    @Post('iniciarSesion')
    iniciarSesion(@Req() request,
                  @Res() response, @Body("usuario")user: String, @Body("password")pass:String){
        const parametros = {
            nombreCookie: 'token',
            valorCookie: this.usuario.usuario,
        };

        if(user==this.usuario.usuario&&pass==this.usuario.password){
            response.cookie(parametros.nombreCookie, parametros.valorCookie);
            return response.send({
                parametros,
                mensaje: 'ok'
            })

        } else {
            throw new PeticionErroneaException(
                'No se puede iniciar Sesion, datos de ingreso invalidos',
                error)
    }

    }

    @Post('cerrarSesion')
    cerrarSesion(@Req() request,
                 @Res() response){
        const parametros = {
            nombreCookie: 'token',
            valorCookie: undefined,
        };
        const existeCookie = request.cookies[parametros.nombreCookie];
        if (existeCookie) {
            response.cookie(parametros.nombreCookie, parametros.valorCookie)
            return response.send({
                mensaje: 'Usted Salio del sistema'
            })
        } else {
            return response
                .status(404)
                .send({
                    mensaje: 'No encontramos cookie'
                })
        }
    }
}