
import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, ContentChild, TemplateRef, OnInit } from '@angular/core';

import { CounterValueDirective } from '../counter-layout/directives/counter-value.directive';
import { CounterBtnIncrementDirective } from '../counter-layout/directives/counter-btn-increment.directive';
import { CounterBtnDecrementDirective } from '../counter-layout/directives/counter-btn-decrement.directive';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CustomCounterComponent implements OnInit {

  @ContentChild(CounterValueDirective, { static: true }) counterValueDir: CounterValueDirective;
  @ContentChild(CounterBtnIncrementDirective, { static: true }) counterIncBtnDir: CounterBtnIncrementDirective;
  @ContentChild(CounterBtnDecrementDirective, { static: true }) counterDecBtnDir: CounterBtnDecrementDirective;

  @Input() title = 'Counter';
  @Input() value = 0;
  @Output() changed = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  get counterValueTpl(): TemplateRef<any> {
    
    return this.counterValueDir && this.counterValueDir.tpl;
  }

  get counterIncBtnTpl(): TemplateRef<any> {
    return this.counterIncBtnDir && this.counterIncBtnDir.tpl;
  }

  get counterDecBtnTpl(): TemplateRef<any> {
    return this.counterDecBtnDir && this.counterDecBtnDir.tpl;
  }

  get counterValueTplContext(): object {
    return { $implicit: this.value };
  }

  get counterIncBtnTplContext(): object {
    return { $implicit: () => this.increment() };
  }

  get counterDecBtnTplContext(): object {
    return { $implicit: () => this.decrement() };
  }

  increment() {
    this.updateValue('inc');
  }

  decrement() {
    this.updateValue('dec');
  }

  private updateValue(action: 'inc' | 'dec') {
    const delta = (action === 'inc') ? 1 : -1;
    this.value += delta;
    this.changed.emit(this.value);
  }

}
