import { NestFactory } from '@nestjs/core';
import { BlockModule } from './block.module';
import { BlockService } from "./block.service"
import {Block} from "./block.model"

import {FlowService} from '@app/flow'
async function bootstrap() {
  const app = await NestFactory.create(BlockModule);
  const srv = app.get(BlockService);
  console.log(srv.getHello());
  const service = new FlowService(
    "0x99cd93730d6d57ca",
    "5d2ade367481d877ff57836ff5189f0a0b16eb33c1754947d428b05f9e0871a9",
    0)
  console.log(service);
  let block = new Block();
  block.test();
}
bootstrap();
