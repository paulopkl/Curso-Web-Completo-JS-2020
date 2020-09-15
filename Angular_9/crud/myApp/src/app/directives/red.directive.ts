import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  // Servers for add the red color into style of Tag
  // Serve para aplicar a cor vermelha no estilo da Tag
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'rgb(227, 94, 107)'
  }

}
