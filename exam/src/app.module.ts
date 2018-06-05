import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SistemaoperativoController} from './sistemaoperativo.controller';
import {SistemaoperativoService} from './sistemaoperativo.service';
import {AplicacionesServices} from './aplicaciones.services';
import {AplicacionController} from './aplicacion.controller';
import {AutorizacionController} from './autorizacion.controller';

@Module({
  imports: [],
  controllers: [AppController, SistemaoperativoController,AplicacionController,AutorizacionController],
  providers: [AppService, SistemaoperativoService,AplicacionesServices],
})
export class AppModule {}
