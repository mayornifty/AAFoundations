import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as path from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  // Serve static files from the 'public' directory
  app.useStaticAssets(path.join(__dirname, '..', 'public'));

  // Apply global validation pipe
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(port);
  console.log(`Listening on port ${port}`);
}
bootstrap();
