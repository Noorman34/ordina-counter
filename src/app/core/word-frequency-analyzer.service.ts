import { EventEmitter, Injectable } from '@angular/core';

import { WordCounterService } from '../core/word-counter.service';

@Injectable({
  providedIn: 'root'
})
 export class WordFrequencyAnalyzerService implements WordFrequencyAnalyzer {
  textInputString = new EventEmitter<String>();
  showOutcome = new EventEmitter<string>();
  highestFrequency = new EventEmitter<number>();
  wordFrequency = new EventEmitter<number>();
  checkword = new EventEmitter<string>();
  answerNArray = new EventEmitter<WordFrequency[]>();

  countedWordArray : Array<{getWord: string, getFrequency: number}> = [];
  answerArray: Array<WordFrequency> = [];

  constructor(private wordCounter: WordCounterService) { }

  calculateHighestFrequency(text: string): number {
    this.countedWordArray = this.wordCounter.countWords(text);
    return this.countedWordArray[0]['getFrequency'];
  }

  calculateFrequencyForWord (text: string, word: string): number {
    this.countedWordArray = this.wordCounter.countWords(text);
    let arrayIndex = this.countedWordArray.map(function(e) { return e.getWord; }).indexOf(word);
    return (arrayIndex < 0) ? -1 : this.countedWordArray[arrayIndex]['getFrequency'];
  }

  calculateMostFrequentNWords (text: string, n: number): WordFrequency[] {
    this.countedWordArray = this.wordCounter.countWords(text);
    if (this.countedWordArray.length < n) {n = this.countedWordArray.length};
    for (let i = 0; i < n; i++) {
      this.answerArray.push(new WordFrequency(this.countedWordArray[i]['getWord'], (this.countedWordArray[i]['getFrequency'])));
    }
    return this.answerArray;
  }

}

export class WordFrequency implements WordFrequency {
  word: string;
  frequency: number;

  constructor(word: string, frequency: number) {
    this.word = word;
    this.frequency = frequency;
  }

  getWord(): string {
    return this.word;
  }

  getFrequency(): number {
    return this.frequency;
  }
}

export interface WordFrequencyAnalyzer {
  calculateHighestFrequency(text: string): number;
  calculateFrequencyForWord (text: string, word: string): number;
  calculateMostFrequentNWords (text: string, n: number): WordFrequency[];
};

export interface WordFrequency {
  getWord(): string;
  getFrequency(): number;
};
