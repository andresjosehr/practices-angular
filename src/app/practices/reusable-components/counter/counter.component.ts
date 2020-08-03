import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {

  @Input() value = 0;
  @Output() changed = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
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
