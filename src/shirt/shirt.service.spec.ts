import { Test, TestingModule } from '@nestjs/testing';
import { ShirtService } from './shirt.service';

describe('ShirtService', () => {
  let service: ShirtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShirtService],
    }).compile();

    service = module.get<ShirtService>(ShirtService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
