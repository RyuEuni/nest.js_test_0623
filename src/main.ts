import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import * as React from 'react';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.static(join(__dirname, '..', 'my-react')));

  await app.listen(3000);
}
bootstrap();