import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCounterBtnIncrement]'
})
export class CounterBtnIncrementDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
