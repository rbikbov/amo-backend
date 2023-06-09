import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
    },
  });
  const port = parseInt(process.env.PORT, 10) || 3000;
  await app.listen(port, () => {
    console.log(`Port: ${port}`);
  });
}
bootstrap();
