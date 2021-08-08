import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { WordFrequencyAnalyzerService } from 'src/app/core/word-frequency-analyzer.service';
import { WordFrequency } from 'src/app/core/word-frequency-analyzer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  highestFrequencyNumber: number = 0;
  wordFrequencyNumber: number = 0;
  checkword: string = '';
  inputnumber: number = 0;
  answerNArray: Array<WordFrequency> = [];

  @ViewChild('f') rawtextForm!: NgForm;

  constructor(private wordFrequencyAnalyser: WordFrequencyAnalyzerService) {}

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.rawtextForm.value['rawtext']);
    this.wordFrequencyAnalyser.textInputString.emit(this.rawtextForm.value['rawtext']);
    // this.rawtextForm.reset();
  }

  getHighestFrequency() {
    this.wordFrequencyAnalyser.textInputString.emit(this.rawtextForm.value['rawtext']);
    this.highestFrequencyNumber = this.wordFrequencyAnalyser.calculateHighestFrequency(this.rawtextForm.value['rawtext']);
    this.wordFrequencyAnalyser.highestFrequency.emit(this.highestFrequencyNumber);
    this.wordFrequencyAnalyser.checkword.emit(this.checkword);
    this.wordFrequencyAnalyser.showOutcome.emit('highest');
  }

  getFrequencyWord(word: string) {
    this.wordFrequencyAnalyser.textInputString.emit(this.rawtextForm.value['rawtext']);
    this.wordFrequencyNumber = this.wordFrequencyAnalyser.calculateFrequencyForWord(this.rawtextForm.value['rawtext'], word);
    this.wordFrequencyAnalyser.wordFrequency.emit(this.wordFrequencyNumber); // -1 when no match
    this.wordFrequencyAnalyser.checkword.emit(this.checkword);
    this.wordFrequencyAnalyser.showOutcome.emit('frequency');
    console.log('getFrequency fired ' + this.wordFrequencyNumber);
  }

  getListWordFrequency(n: number) {
    this.wordFrequencyAnalyser.textInputString.emit(this.rawtextForm.value['rawtext']);
    this.answerNArray = this.wordFrequencyAnalyser.calculateMostFrequentNWords(this.rawtextForm.value['rawtext'], n);
    this.wordFrequencyAnalyser.answerNArray.emit(this.answerNArray);
    this.wordFrequencyAnalyser.showOutcome.emit('most');
    console.log(this.answerNArray);
  }

}
