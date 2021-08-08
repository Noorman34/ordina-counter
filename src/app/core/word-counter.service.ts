import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WordCounterService {

  countWords(rawText: string) {
    const wordFrequencyArray: Array<{getWord: string, getFrequency: number}> = [];
    var textArray = rawText.toLowerCase().trim().replace(/[^a-zA-ZÀ-ȕ]+/g, ' ').split(' ');
  
    function onlyUnique(value: string, index: number, self: string[]) {
      return self.indexOf(value) === index;
    }
    var unique = textArray.filter(onlyUnique);
  
    unique.forEach((item) => {
      const numberOfOccurrences = textArray.filter(checkMatch).length;
      wordFrequencyArray.push({getWord: item, getFrequency: numberOfOccurrences});
  
      function checkMatch(str: string) {
        return str === item;
      }
    });
  
    return wordFrequencyArray.sort((a, b) => b.getFrequency - a.getFrequency  || a.getWord.localeCompare(b.getWord) );
  }
}
