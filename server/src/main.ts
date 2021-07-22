import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as morgan from 'morgan';

import { AppModule } from './app/app.module';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const port = process.env.SERVER_PORT || 4000;
  const prefix = 'api';

  // Pipes
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Interceptors
  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  // Middleware
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      cookie: { maxAge: 60 * 60 * 1000 },
      saveUninitialized: true,
      resave: false,
    }),
  );
  app.use(cookieParser());
  app.use(morgan('tiny'));
  app.setGlobalPrefix(prefix);
  app.enableCors();

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Reactive Resume')
    .setDescription('A free and open-source resume builder.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + prefix);
  });
};

bootstrap();
