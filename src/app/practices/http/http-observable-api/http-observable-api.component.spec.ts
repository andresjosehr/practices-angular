import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpObservableApiComponent } from './http-observable-api.component';

describe('HttpObservableApiComponent', () => {
  let component: HttpObservableApiComponent;
  let fixture: ComponentFixture<HttpObservableApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpObservableApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpObservableApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
