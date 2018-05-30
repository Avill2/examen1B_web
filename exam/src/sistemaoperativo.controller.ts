import {Controller, Get, HttpCode, Post, ReflectMetadata, Req, Res} from '@nestjs/common';
import {SistemaoperativoService} from './sistemaoperativo.service';

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

 //   @Get('mostrarExpress')
 //   mostrarUsuarioExpress(
 //       @Req() request,
  //      @Res() response
   // ) {
  //      return response
 //           .status(200)
  //          .send(this.usuarios);
   // }

   @Post('crearSO')
   // @ReflectMetadata('permisos', ['privado'])

    crearSO(
        @Body(new UsuarioPipe(USUARIO_SCHEMA))
            nuevoUsuario
    ) {

        const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);
        return nuevoUsuario;
   }


}


