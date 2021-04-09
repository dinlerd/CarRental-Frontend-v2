import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {

  constructor(private element:ElementRef) {
    let el = this.element.nativeElement;
    el.setAttribute('style', 'color: blue; background: white');
   }

  }