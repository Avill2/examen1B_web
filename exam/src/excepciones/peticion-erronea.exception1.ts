import {HttpException, HttpStatus} from "@nestjs/common";


export class PeticionErroneaException1 extends HttpException {

    constructor(private readonly _mensaje,
                private readonly _nivelError) {
        super({
            mensaje: 'Peticion erronea',
            statusCode: HttpStatus.NOT_FOUND,
            nivelError: _nivelError,
            detalle: _mensaje
        }, HttpStatus.NOT_FOUND);
    }
}