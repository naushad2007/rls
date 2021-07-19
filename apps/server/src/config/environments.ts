import * as Joi from 'joi';

const validationSchema = Joi.object({
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRATION_TIME: Joi.number().required(),
  SESSION_SECRET: Joi.string().required(),

  POSTGRES_HOST: Joi.string().default('localhost'),
  POSTGRES_PORT: Joi.number().default(5432),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().default('reactive-resume'),

  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  PORT: Joi.number().default(3000),
});

export default validationSchema;
