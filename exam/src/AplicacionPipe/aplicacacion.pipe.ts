import {ArgumentMetadata, Injectable} from '@nestjs/common';
import {PeticionErroneaException} from '../excepciones/peticion-erronea.exception';
import * as Joi from 'joi';

@Injectable()
export class AplicacacionPipe{

    constructor (private readonly _schema){

    }
    transform (jsonValidar:any, metadata:ArgumentMetadata){
        const{
            error}
            =Joi.validate(jsonValidar,this._schema)
        if (error) {
            throw new PeticionErroneaException(
                {
                    erorr: error,
                    mensaje: 'Json no valido'
                },
                10
            );
        } else {
            return jsonValidar;
        }
    }
}