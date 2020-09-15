import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit {
 
  @Input('myForOf') numbers: number[];
  // @Input('myForUsando') texto: string[];

  constructor(private container: ViewContainerRef, private template: TemplateRef<any>) {
    
  }

  ngOnInit(): void {
    // console.log(this.numbers);
    // console.log(this.texto);
    for(let number of this.numbers) {
      // console.log(`${this.numbers.indexOf(number)}: ${number}`);
      this.container.createEmbeddedView(this.template, { $implicit: number })
    }
  }

}
