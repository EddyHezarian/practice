import { Test, TestingModule } from '@nestjs/testing';
import { ShirtController } from './shirt.controller';

describe('ShirtController', () => {
  let controller: ShirtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShirtController],
    }).compile();

    controller = module.get<ShirtController>(ShirtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
