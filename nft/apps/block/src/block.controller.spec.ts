import { Test, TestingModule } from '@nestjs/testing';
import { BlockController } from './block.controller';
import { BlockService } from './block.service';
import {range} from './block.model';

describe('BlockController', () => {
  let blockController: BlockController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BlockController],
      providers: [BlockService],
    }).compile();

    blockController = app.get<BlockController>(BlockController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(blockController.getHello()).toBe('Hello World!');
    });
  });

  describe('range',() =>{
    it('should generate a range iteretor', () => {
      let a = range(1,100,1);
      expect(a).toHaveLength(100);
    })
  });
});
