import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SistemaoperativoController} from './sistemaoperativo.controller';
import {SistemaoperativoService} from './sistemaoperativo.service';

@Module({
  imports: [],
  controllers: [AppController, SistemaoperativoController],
  providers: [AppService, SistemaoperativoService],
})
export class AppModule {}
