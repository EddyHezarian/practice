import { Test, TestingModule } from '@nestjs/testing';
import { ScarfController } from './scarf.controller';

describe('ScarfController', () => {
  let controller: ScarfController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScarfController],
    }).compile();

    controller = module.get<ScarfController>(ScarfController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
