import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordFrequencyAnalyzerComponent } from './word-frequency-analyzer.component';

describe('WordFrequencyAnalyzerComponent', () => {
  let component: WordFrequencyAnalyzerComponent;
  let fixture: ComponentFixture<WordFrequencyAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordFrequencyAnalyzerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordFrequencyAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
