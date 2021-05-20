import { NestFactory } from '@nestjs/core';
import { BlockModule } from './block.module';
import { BlockService } from "./block.service"

async function bootstrap() {
  const app = await NestFactory.create(BlockModule);
  const srv = app.get(BlockService);
  console.log(srv.getHello());
}
bootstrap();
