import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpPromiseApiComponent } from './http-promise-api.component';

describe('HttpPromiseApiComponent', () => {
  let component: HttpPromiseApiComponent;
  let fixture: ComponentFixture<HttpPromiseApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpPromiseApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpPromiseApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
