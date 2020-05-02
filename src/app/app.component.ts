import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'typing-test';
  generatedSentence = lorem.sentence();
  inputText = '';
  color = '';

  onInput(value: string) {
    this.inputText = value;
  }

  compare(generatedLetter: string, inputLetter: string) {
    if (!inputLetter) {
      return 'unchecked';
    }
    return inputLetter === generatedLetter ? 'correct' : 'wrong';
  }
}
