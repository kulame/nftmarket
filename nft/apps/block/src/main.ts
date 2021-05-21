import { NestFactory } from '@nestjs/core';
import { BlockModule } from './block.module';
import { BlockService } from "./block.service"
import {Block} from "./block.model"
import * as fcl from "@onflow/fcl";
import {FlowService} from '@app/flow'

async function bootstrap() {
  const app = await NestFactory.create(BlockModule);
  const srv = app.get(BlockService);
  fcl.config().put("accessNode.api", "https://access-testnet.onflow.org");
  const service = new FlowService(
    "0x99cd93730d6d57ca",
    "5d2ade367481d877ff57836ff5189f0a0b16eb33c1754947d428b05f9e0871a9",
    0)
  console.log(service);
  const auth = service.authorizeMinter();
  let block = new Block(service);
  await block.test();
}
bootstrap();
