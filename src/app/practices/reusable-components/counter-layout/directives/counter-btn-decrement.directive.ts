import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCounterBtnDecrement]'
})
export class CounterBtnDecrementDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
