import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpJsonpApiComponent } from './http-jsonp-api.component';

describe('HttpJsonpApiComponent', () => {
  let component: HttpJsonpApiComponent;
  let fixture: ComponentFixture<HttpJsonpApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpJsonpApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpJsonpApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
