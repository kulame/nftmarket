import { Module } from '@nestjs/common';
import { FlowService } from './flow.service';

@Module({
  providers: [FlowService],
  exports: [FlowService],
  imports:[FlowService]
})
export class FlowModule {}
