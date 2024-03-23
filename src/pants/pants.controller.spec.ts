import { Test, TestingModule } from '@nestjs/testing';
import { PantsController } from './pants.controller';

describe('PantsController', () => {
  let controller: PantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PantsController],
    }).compile();

    controller = module.get<PantsController>(PantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
