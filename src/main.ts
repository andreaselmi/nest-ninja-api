import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("Ninja API")
    .setDescription("The Ninja API description")
    .setVersion("1.0")
    .addTag("ninja")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("/api-docs", app, document);
  await app.listen(3000);
}
bootstrap();
