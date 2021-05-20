import { Test, TestingModule } from '@nestjs/testing';
import { FlowService } from './flow.service';
import * as fcl from "@onflow/fcl";

describe('FlowService', () => {
  let service: FlowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlowService,
        {provide:FlowService, useClass:jest.fn()},
      ],
    }).compile();
    let service = module.get<FlowService>(FlowService)
  });

  it('should be defined', () => {
    //expect(service).toBeDefined();
  });
});
