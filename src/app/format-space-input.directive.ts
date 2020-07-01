import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFormatSpaceInput]'
})

export class FormatSpaceInputDirective {

  constructor() { }

  @HostListener('input', ['$event'])
    onKeyDown(event: KeyboardEvent) {
      const input = event.target as HTMLInputElement;
      let trimmed = input.value.replace(/\s+/g, '');
      if (trimmed.length >= 10) {
        trimmed = trimmed.substr(0, 10);               
      } 
      
      let numbers = [];
      let numberBeforeSpace = 2;
      for (let i = 0; i < trimmed.length; i += numberBeforeSpace) {
        numbers.push(trimmed.substr(i, numberBeforeSpace));
      }      
      input.value = numbers.join(' ');      
  }

}
