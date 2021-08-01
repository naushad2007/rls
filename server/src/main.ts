import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from "@nestjs/common";
import { NestFactory, Reflector } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as cookieParser from "cookie-parser";
import * as morgan from "morgan";

import { AppModule } from "./app/app.module";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const port = process.env.SERVER_PORT;

  // Pipes
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Interceptors
  const reflector = app.get(Reflector);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));

  // Middleware
  app.use(cookieParser());
  app.use(morgan("tiny"));

  // Swagger
  const config = new DocumentBuilder()
    .setTitle("Reactive Resume")
    .setDescription("A free and open-source resume builder.")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/docs", app, document);

  await app.listen(port, () => {
    Logger.log("Listening at http://localhost:" + port + "/");
  });
};

bootstrap();
