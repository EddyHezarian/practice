import { Test, TestingModule } from '@nestjs/testing';
import { ScarfService } from './scarf.service';

describe('ScarfService', () => {
  let service: ScarfService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ScarfService],
    }).compile();

    service = module.get<ScarfService>(ScarfService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
