import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  DATABASE_URL: Joi.string().required(),
  ADMIN_PASSWORD: Joi.string().min(12).required(), // Mínimo 12 chars em produção
  JWT_SECRET: Joi.string().min(32).required(), // Mínimo 32 chars
  JWT_EXPIRES_IN: Joi.string().default('1d'),
  PORT: Joi.number().default(3333),
});