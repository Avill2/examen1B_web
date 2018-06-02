import * as Joi from 'joi';

export const SISTEMAOPERATIVO_SCHEMA= Joi.object().keys({
    nombre:Joi.string().alphanum().required(),
    versionApi:Joi.number().integer().greater(0).required(),
    fechaLanzamiento:Joi.string().alphanum().required(),
    pesoEnGigas :Joi.number().required(),
    instalado:Joi.boolean().required(),
});