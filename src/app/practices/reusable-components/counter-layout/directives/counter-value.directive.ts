import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCounterValue]'
})
export class CounterValueDirective {

  constructor(public tpl: TemplateRef<any>) { }

}
