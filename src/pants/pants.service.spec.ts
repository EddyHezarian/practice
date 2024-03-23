import { Test, TestingModule } from '@nestjs/testing';
import { PantsService } from './pants.service';

describe('PantsService', () => {
  let service: PantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PantsService],
    }).compile();

    service = module.get<PantsService>(PantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
