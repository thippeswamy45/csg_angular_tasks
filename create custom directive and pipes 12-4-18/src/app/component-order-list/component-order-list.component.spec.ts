import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOrderListComponent } from './component-order-list.component';

describe('ComponentOrderListComponent', () => {
  let component: ComponentOrderListComponent;
  let fixture: ComponentFixture<ComponentOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
