import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordCounterService } from '../../core/word-counter.service';
import { WordFrequencyAnalyzerService } from 'src/app/core/word-frequency-analyzer.service';
import { WordFrequency } from 'src/app/core/word-frequency-analyzer.service';

@Component({
  selector: 'app-word-frequency-analyzer',
  templateUrl: './word-frequency-analyzer.component.html',
  styleUrls: ['./word-frequency-analyzer.component.less']
})
export class WordFrequencyAnalyzerComponent implements OnInit {
  displayResult: boolean = false;
  rawInput: string = '';
  showOutcome: string = '';
  highestFrequency: number = 0;
  highestFrequencyNumber: number = 0;
  highestFrequencyWord: string = '';
  answerArray: Array<WordFrequency> = [];
  countedWordArray : Array<{getWord: string, getFrequency: number}> = [];
  
  constructor(private wordCounter: WordCounterService, private wordFrequencyAnalyser: WordFrequencyAnalyzerService) { }

  ngOnInit(): void {
    // this service checks for submitted inputtext to analyze //
    this.wordFrequencyAnalyser.textInputString.subscribe(
      (textInputString: string) => {
        this.rawInput = textInputString;
        this.countedWordArray = this.wordCounter.countWords(this.rawInput);
        this.displayResult = true;
      }
    );
    // this service checks to see what answer needs to be shown on result (highest, frequency, most) //
    this.wordFrequencyAnalyser.showOutcome.subscribe(
      (showOutcome: string) => {
        this.showOutcome = showOutcome;
        console.log('outcome = ' + showOutcome);
      }
    );
    // this service gets the answer for highest frequency //
    this.wordFrequencyAnalyser.highestFrequency.subscribe(
      (highestFrequency: number) => {
        this.highestFrequency = highestFrequency;
      }
    );
    // this service gets the searched word frequency number to display in the text //
    this.wordFrequencyAnalyser.wordFrequency.subscribe(
      (wordFrequency: number) => {
        this.highestFrequencyNumber = wordFrequency;
      }
    );
    // this service gets the searched word for frequency in the text //
    this.wordFrequencyAnalyser.checkword.subscribe(
      (checkword: string) => {
        this.highestFrequencyWord = checkword;
      }
    );
    // this service gets the nWord Array from the Form via the service //
    this.wordFrequencyAnalyser.answerNArray.subscribe(
      (mWordArray: WordFrequency[]) => {
        this.answerArray = mWordArray;
        console.log('answerArray: ' + this.answerArray);
      }
    );
  }

}
