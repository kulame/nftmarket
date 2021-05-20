import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FlowService } from "./services/flow";

async function bootstrap() {
  console.log("hello");
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
