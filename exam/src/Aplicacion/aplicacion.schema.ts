import * as Joi from 'joi';

export const APLICACION_SCHEMA=Joi.object().keys({
    idApp:Joi.number().required(),
    pesoEnGigas :Joi.number().required(),
    version:Joi.number().integer().greater(0).required(),
    nombre:Joi.string().alphanum().min(3).max(30).required(),
    urlDescarga:Joi.string().min(3).max(100).required(),
    fechaLanzamiento:Joi.string().alphanum().required(),
    costo:Joi.number().integer().required(),
    sistemaOperativoId:Joi.number().required(),
});