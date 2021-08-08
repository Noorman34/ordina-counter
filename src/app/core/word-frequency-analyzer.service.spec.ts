import { TestBed } from '@angular/core/testing';

import { WordFrequencyAnalyzerService } from './word-frequency-analyzer.service';

describe('WordFrequencyService', () => {
  let service: WordFrequencyAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordFrequencyAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
