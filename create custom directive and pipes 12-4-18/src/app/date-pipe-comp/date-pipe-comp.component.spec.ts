import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipeCompComponent } from './date-pipe-comp.component';

describe('DatePipeCompComponent', () => {
  let component: DatePipeCompComponent;
  let fixture: ComponentFixture<DatePipeCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePipeCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePipeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
