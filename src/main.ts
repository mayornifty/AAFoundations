import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
